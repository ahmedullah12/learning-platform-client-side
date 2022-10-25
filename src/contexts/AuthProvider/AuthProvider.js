import React from 'react';
import { createContext } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
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
    }


    const authInfo = {signInWithGoogle, signInWithGithub}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;