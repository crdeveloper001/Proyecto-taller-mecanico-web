import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import useAuthentication from "../../Hooks/useAuthentication.js";

export const PrivateRoutesProtection= () =>{
    let auth = {'token':true}
    const {authorizationNavigation,isAuthenticated} = useAuthentication();
    authorizationNavigation()
    return(
        auth ? <Outlet/> : <Navigate to='/'/>
    )
}