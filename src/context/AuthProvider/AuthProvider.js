import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const providerLogin = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider);
    }

    // create user

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Log Out 

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    // UpdateUserProfile

    const UpdateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // EmailVerification

    const EmailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // Get User

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth State Change', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoader(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loader,
        setLoader,
        setUser,
        providerLogin,
        logOut,
        createUser,
        signIn,
        EmailVerification,
        UpdateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;