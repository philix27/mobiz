"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { AuthService } from '@/config/auth/AuthService';
import { onAuthStateChanged } from 'firebase/auth';

export default function LoginScreen() {
  const router = useRouter();
  const auth = new AuthService()

  const user = auth.user()
  const handleLogin = async () => {
    const user = await auth.loginWithGoogle();
    console.log('User signed in:', user);
  }

  useEffect(() => {
    onAuthStateChanged(auth.auth!, (user) => {
      if (user) {
        // User is signed in.
        // The 'user' object contains information about the signed-in user,
        // such as user.uid, user.email, user.displayName, etc.
        console.log("User is signed in:", user.uid);
        router.push('/dashboard'); // Redirect to home page or any other page after login

      } else {
        // User is signed out.
        console.log("No user is signed in.");
      }
    });

  }, []);

  return (
    <div className='w-full '>
      <button onClick={handleLogin}>Login With Google</button>
      {user ? user.displayName : "Not  logged in"}
    </div>
  )
}
