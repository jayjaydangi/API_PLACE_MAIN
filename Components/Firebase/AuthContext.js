import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./Firebase";

const AuthContext = createContext();
export const AuthContextProvider = ({childran})=>{
    console.log('childran', childran)
    const [user, setUser] = useState(null);
    const googleSignIn = () =>{
        const provider =  new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const logOut =()=>{
        signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
    
      return () => {
        unsubscribe();
      }
    }, [user])
    



    return(
        <AuthContext.Provider value={{user, googleSignIn, logOut}}>
            {childran}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(AuthContext)
}