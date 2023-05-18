import React, { createContext, useEffect, useState } from 'react';
import {   GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // for registration
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    

    // for image and userName
    const updateProfileData = (currentUser, disPlayName, photoUrl)=>{
        setLoading(true);
        return updateProfile(currentUser, {disPlayName, photoUrl});
    }

    
    // logg in
    const loggIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    

    // for google signIn
     const googleLogIn = ()=> {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        googleLogIn,
        createUser,
        updateProfileData,
        loggIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;