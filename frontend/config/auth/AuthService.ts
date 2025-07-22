import { initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export class AuthService {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    private firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    }

    auth: Auth | undefined = undefined


    constructor() {
        const app = initializeApp(this.firebaseConfig);
        this.auth = getAuth(app);
    }

    loginWithGoogle() {

        const googleProvider = new GoogleAuthProvider();
        // Logic to handle Google login
        console.log("Logging in with Google...");

        return signInWithPopup(this.auth!, googleProvider);
    }

    logOut() {
        // Logic to handle user logout
        console.log("Logging out...");
        this.auth?.signOut();
    }

    isLoggedIn(): boolean {
        // Logic to check if the user is logged in
        console.log("Checking if user is logged in...");
        // Check if the current user is not null
        if (!this.auth) {
            console.error("Auth service not initialized.");
            return false;
        }
        return this.auth?.currentUser !== null;
    }


    user() {

        return this.auth?.currentUser;
    }
}