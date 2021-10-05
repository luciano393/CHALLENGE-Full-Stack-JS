import { useAuth0 } from "@auth0/auth0-react";

// Constantes
const dataInicial = {
    arrayUsuario : []
}


const OBTENER_USUARIO_EXITO = 'OBTENER_USUARIO_EXITO';

// reducer

export default function usuarioReducer(state = dataInicial, action) {
    switch(action.type){
        case OBTENER_USUARIO_EXITO:
            return {...state, array: action.payload}
        default: 
            return state
    }
}

// acciones
export const obtenerUsuarioAccion = () => (dispatch, getState) => {
    try {
        const { user } = useAuth0();  
            dispatch({
                type: OBTENER_USUARIO_EXITO,
                payload: user
            })
    } catch (error) {
        console.log(error)
    }
}
