import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { obtenerUsuarioAccion } from "../../redux/userDucks";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export const LoginButton = (props) => {
    const history = useHistory();
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();

    if(isAuthenticated) {
        dispatch(obtenerUsuarioAccion());
        history.push('/main')
    };


    return <button onClick={() => loginWithRedirect("/main")} className={props.className}>Login</button>
}