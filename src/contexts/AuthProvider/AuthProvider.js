import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

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
    }


    const authInfo = {signUpWithEmailAndPassword, loginWithEmailAndPassword, signInWithGoogle, signInWithGithub}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;