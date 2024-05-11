import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import auth from "../FIrebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();
// const twitterProvider = new TwitterAuthProvider();



export const AuthCustomContext = createContext(null)

const Provider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Register 
    const registerUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // sign in with google
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // sign in with twitter 
    // const logInWithTwitter =( )=>{
    //     return signInWithPopup(auth, twitterProvider)
    // }
    // sign in 
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update profile 
    const updateProfileFromUser = (name, photoURL) => {
        console.log(name, photoURL, 'provider')
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL,
        });
    }

    // web keeper 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged (auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        } )
        return () => unsubscribe()
    },[]);

    
    // log out 
    const logOut = async() => {
        setLoading(true)
        return signOut (auth)
        .then((result) => {
            console.log(result.user, 'result log out')
          }).catch((error) => {
            console.error(error,'error from log out')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You Log Out successfully !",
                showConfirmButton: false,
                timer: 1500
              });
          });
    }

    // All value 
    const userInfo = {user,setUser, loading, registerUser, signInGoogle, logInUser, logOut, updateProfileFromUser }
    return (
        <AuthCustomContext.Provider value={userInfo}>
            {children}
        </AuthCustomContext.Provider >
    );
};
Provider.propTypes = {
    children: PropTypes.node
}
export default Provider;