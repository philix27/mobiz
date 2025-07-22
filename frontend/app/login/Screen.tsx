"use client";
import { appSignInWithGoogle, auth } from '@/config/firebase.config'
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function LoginScreen() {
    const router = useRouter();
  const handleLogin = async () => {
    const user  = await appSignInWithGoogle();
    console.log('User signed in:', user);
  }

  useEffect(() => {
    // You can add any additional logic here if needed

    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in.
    // The 'user' object contains information about the signed-in user,
    // such as user.uid, user.email, user.displayName, etc.
    console.log("User is signed in:", user.uid);
    router.push('/'); // Redirect to home page or any other page after login
  } else {
    // User is signed out.
    console.log("No user is signed in.");
  }
});

  }, []);

  return (
    <div>
      <button onClick={handleLogin}>Login With Google</button>
    </div>
  )
}
