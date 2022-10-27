import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
   
    
    
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const loginWithGithub  = (githunProvider) => {
        return signInWithPopup(auth, githunProvider)
    }

   

    const signUpWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithEmailAndPassword =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    const verifyEmailAdress = () => {
        return sendEmailVerification(auth.currentUser)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            if(currentUser == null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false)
        });
        return () => {
            unsubscribe();
        };
    },[])


    const authInfo = {user,setUser, loading, setLoading, signUpWithEmailAndPassword, loginWithEmailAndPassword, signInWithGoogle, loginWithGithub, logOut, verifyEmailAdress, updateUserProfile}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;