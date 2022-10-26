import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    const signUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithEmailAndPassword =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };

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
            setLoading(false);
        });
        return unsubscribe();
    },[])


    const authInfo = {user, loading, setLoading, signUpWithEmailAndPassword, loginWithEmailAndPassword, signInWithGoogle, signInWithGithub, verifyEmailAdress, updateUserProfile}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;