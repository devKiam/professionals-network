import React, {createContext} from 'react';
import useFirebase from "../hooks/useFirebase";


export const AuthContext = createContext()  // created context API


const AuthProvider = (props) => {

    const {children} = props

    const allContext = useFirebase()


    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;