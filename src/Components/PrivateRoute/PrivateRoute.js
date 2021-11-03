// custom route made by by developer
import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider";

const PrivateRoute = ({children, ...rest}) => {

    const {user} = useContext(AuthContext)


    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/sign-in",
                            state: { from: location }
                        }}
                    />
                )
            }
        >

        </Route>
    );
};

export default PrivateRoute;