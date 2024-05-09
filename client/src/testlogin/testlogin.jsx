import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import googlelogo from './google.png'



const firebaseConfig = {
    apiKey: "AIzaSyASDEUa6pJMfb6HaFAwZ-ry-Dmzf0qLjQo",
    authDomain: "treasurecart-7541f.firebaseapp.com",
    projectId: "treasurecart-7541f",
    storageBucket: "treasurecart-7541f.appspot.com",
    messagingSenderId: "808172942640",
    appId: "1:808172942640:web:29b541f04e02a2b11604f5",
    measurementId: "G-3GJJLTZYKP"

};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)



const SignInWithGoogle = () => {
    const navigate = useNavigate(); 

    

    const handleSignIn = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log('User signed in successfully:', result.user);
         navigate('/search');

    } catch (error) {
        console.error('Error signing in with Google:', error.message);
    }
}
  return (
    <div className='flex '>
      <button className='w-52 h-[35px] border border-black rounded flex justify-items-center items-center bg-white p-2' onClick={handleSignIn}>
      <img src={googlelogo} alt="" className='w-5 mr-2' /> 
        Sign in with Google</button>
    </div>

  );
};

export default SignInWithGoogle;
