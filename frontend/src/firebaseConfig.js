import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHuxpT3A72ry4RwcxqUjosWGOXm2sSASE",
    authDomain: "doggys-house-cbdc7.firebaseapp.com",
    projectId: "doggys-house-cbdc7",
    storageBucket: "doggys-house-cbdc7.appspot.com",
    messagingSenderId: "262529127234",
    appId: "1:262529127234:web:bda1364a3b70aa57b6eedb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

//login

export const loginUser = async ({ email, password }) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res;
    } catch (error) {
        console.log("Error in Login User");
        return error;
    }
}

//logOut

export const logoutUser = () => {
    signOut(auth)
}

//Login con Google

const googleProvider = new GoogleAuthProvider()
export const loginGoogle = async () => {
    const res = await signInWithPopup(auth, googleProvider)
    return res;
}