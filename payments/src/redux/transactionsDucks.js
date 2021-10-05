import clienteAxios from "../config/axios";

// constantes
const dataInicial = {
    array : []
}

const OBTENER_TRANSACCIONES_EXITO = 'OBTENER_TRANSACCIONES_EXITO';

// reducer
export default function transaccionesReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_TRANSACCIONES_EXITO:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// acciones
export const obtenerTransaccionesAccion = () => async(dispatch, getState) => {
    try {
        const res = await clienteAxios.get('/presupuesto')
            dispatch({
                type: OBTENER_TRANSACCIONES_EXITO,
                payload: res.data
            })
    } catch (error) {
        console.log(error);
    }
}