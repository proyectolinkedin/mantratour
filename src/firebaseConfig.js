import { Password } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth, signOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvmNG8tpZuCol5z3lJSvKBJWQgyBOZyLs",
  authDomain: "mantratour-72991.firebaseapp.com",
  projectId: "mantratour-72991",
  storageBucket: "mantratour-72991.appspot.com",
  messagingSenderId: "121828528631",
  appId: "1:121828528631:web:a00520c2275fa3ac9e9ef2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
//LOS SERVICIOS
//auth
//login

export const onSignIn = async ({email, password})=>{
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        return res
    } catch (error) {
        console.log(error);
    }

}

//logout
export const logOut = ()=>{
    signOut(auth)
}

//login con google
let googlProvider = new GoogleAuthProvider()
export const loginGoogle = async ()=>{
    const res = await signInWithPopup(auth, googlProvider)
    return res;
}

//registro

export const signUp = async ({email, password}) => {
   let res = await createUserWithEmailAndPassword(auth, email, password)
   return res
}

//olvide la contraseña

export const forgotPassword = async(email)=>{
 let res = await sendPasswordResetEmail(auth,email)
 return res
}