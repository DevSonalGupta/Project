import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRUsEkchvekKU7xLab1eQBMTbJ1rQ6VJM",
  authDomain: "netflix-clone-b0f35.firebaseapp.com",
  projectId: "netflix-clone-b0f35",
  storageBucket: "netflix-clone-b0f35.firebasestorage.app",
  messagingSenderId: "36496012504",
  appId: "1:36496012504:web:fd8265da10864fb3f213ad"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db= getFirestore(app);

const signUp= async(name,email,password)=>{
try{
   const res= await createUserWithEmailAndPassword(auth, email, password)
   const user = res.user;
   await addDoc(collection(db,"user"),{
    uid: user.uid,
    name,
    authProvider:"local",
    email,

   })
}
catch(error){
    console.log(error);
    alert(error);
}
}

const login= async (email,password)=>{
try{
    await signInWithEmailAndPassword(auth, email,password)
}
catch(error){
    console.log(error)
    alert(error)
}
}

const logout=()=>{
    signOut(auth) 
}

export {auth, db, login, signUp, logout}
 