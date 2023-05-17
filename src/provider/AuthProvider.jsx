import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSingIn =() =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }
    const logOut = () => {
        setLoading(true); 
        return signOut(auth);
    }
    const updateUser = (user,name, photo) =>{
        setLoading(true);
        // console.log(auth.currentUser);
        return updateProfile(user,{
            displayName: name, 
            photoURL: photo
          })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            // console.log('user from useffect', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])
    const authInfo ={
        
        googleSingIn,
        createUser,
        updateUser,
        loginUser,
        logOut,
        loading,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;