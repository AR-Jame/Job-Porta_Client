import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    updateProfile,
    sendPasswordResetEmail
} from "firebase/auth";
import app from "./firebase.config";
import useAxios from '../hooks/useAxios';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const axiosBase = useAxios()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googlLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (name) => {
        return updateProfile(user, { displayName: name })
    }

    const passReset = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if (currentUser) {
                axiosBase.post('/jwt', { email: currentUser.email }, { withCredentials: true })
                    .then(() => {
                        // data is responding
                    })
            }
            else {
                axiosBase.get('/logout', { withCredentials: true })
                    .then(() => {
                        // data is responding
                    })
            }
            setLoading(false)

        })

        return () => {
            unSubscribe();
        }
    }, [auth, axiosBase])

    const authValue = {
        signUp,
        signIn,
        googlLogin,
        logOut,
        updateUser,
        passReset,
        setUser,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;