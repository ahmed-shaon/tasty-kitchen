import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    //user with email and password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserInfo = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    //set User
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    },[])

    //user logout
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserInfo,
        userLogin,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>            
        </div>
    );
};

export default AuthProvider;