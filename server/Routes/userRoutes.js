const express = require('express');
const userRouter = express.Router();
const { registerUser, updateUser, loginUser } = require('../Controllers/userController');
const verifyUser = require('../Middlewares/verifyUser');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios'); // Import Axios library
require('dotenv').config();
const User = require('../Models/userModels');

// Initialize OAuth2Client with Google Client ID
const googleClientId = process.env.CLIENT_ID;
const oAuth2Client = new OAuth2Client(googleClientId);

// Define the required scope and audience for Google Sign-In
const googleScope = 'openid email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';
const googleAudience = googleClientId;

userRouter.post('/user-register', registerUser);
userRouter.post('/user-login', loginUser);
userRouter.put('/user-update/:id', verifyUser, updateUser);

userRouter.get('/oauth', async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange the received code for tokens
    const { tokens } = await oAuth2Client.getToken({
      code,
      scope: googleScope,
    });

    // Set the credentials of the OAuth2Client to use the access token
    oAuth2Client.setCredentials(tokens);

    // Get user info from Google using UserInfo API
    const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    const { email, given_name, family_name, picture } = userInfoResponse.data;

    // Check if the user already exists in your database
    let user = await User.findOne({ email });

    if (!user) {
      // Create a new user if not found
      user = new User({
        email,
        firstName: given_name,
        lastName: family_name,
        profilePicture: picture,
      });
      await user.save();
    }

    // Generate JWT token for the authenticated user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with success message, user info, and JWT token
    res.json({ message: 'Authentication successful', user, token });
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    res.status(500).json({ error: 'Failed to authenticate with Google' });
  }
});

module.exports = userRouter;




