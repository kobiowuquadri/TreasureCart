import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const GoogleSignIn = () => {

   const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.get('http://localhost:4000/oauth');
      const { token } = response.data;

      localStorage.setItem('token', token);

      navigate('/productpage');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      alert('Failed to sign in with Google. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default GoogleSignIn;

