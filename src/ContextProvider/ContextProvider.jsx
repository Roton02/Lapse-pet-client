import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config/Firbase.config";
import {  updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext(null)
const ContextProvider = ({children}) => {

//  const [viewLand , setViewLand] = useState({})
//  console.log(viewLand);
 const [user , setUser] =useState(null)
    const [loading, setLoading] = useState(true)
   
    const signUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleProvider = new GoogleAuthProvider();
  const googleSignIn =()=>{
    setLoading(true)
    return  signInWithPopup(auth,googleProvider)
    
  }
  const githubProvider = new GithubAuthProvider()
  const githubSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  
  }
    const login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const Logout =()=>{
        // setLoading(false)
         signOut(auth)
         toast.success(' successful Logout ')
         return
    }
   
    const UpdateUser = (displayName , photoURL, email) =>{
     return updateProfile(auth.currentUser, {
        displayName: displayName, photoURL: photoURL,email:email
      })
      };
    
    useEffect(()=>{
        const  unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           if (currentUser) {
             setUser(currentUser);
             setLoading(false)
           } else{
              // console.log('logOut Successfull');
           setUser(null)
           setLoading(false)
           }
           return ()=>{
               unsubscribe()
           }
         });
     },[])

const info = {UpdateUser,  user, googleSignIn,githubSignIn, signUp,login,Logout,loading}
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

ContextProvider.propTypes={
  children:PropTypes.node.isRequired
}

export default ContextProvider;