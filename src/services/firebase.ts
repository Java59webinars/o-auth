// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRnokOFSEC-WkqdsG2t3qV_atnMG2DgAY",
    authDomain: "o-auth2-88866.firebaseapp.com",
    projectId: "o-auth2-88866",
    storageBucket: "o-auth2-88866.firebasestorage.app",
    messagingSenderId: "922749857300",
    appId: "1:922749857300:web:e116d15984101c326d0101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (e){
        console.error("Err", e);
    }
}

export const logOut = async ()  =>{
    await signOut(auth);
}
