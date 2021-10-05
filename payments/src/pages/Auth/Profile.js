import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { obtenerUsuarioAccion } from "../../redux/userDucks";
import clienteAxios from "../../config/axios";

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch()

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isAuthenticated) {
        dispatch(obtenerUsuarioAccion());
    };


    return (
        isAuthenticated && (
            <div className="profile">
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        )
    )
}