import React from "react";
import { Route, Navigate } from "react-router-dom";

export function IsUserRedirect({user, loggedInPath, children, ...restProps}){
    if(!user){
        return children
    }
    if(user){
        console.log('User -',loggedInPath );
        return(
            <Navigate to={loggedInPath} />
        )
    }
    return null
}
export function ProtectedRoute({user, children, ...restProps}){
    if(user){
        return children
    }
    if(!user){
        return(
            <Navigate to="/signin" />
        )
    }
    return null
}

