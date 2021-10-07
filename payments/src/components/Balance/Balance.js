import React from 'react'
import { useSelector } from 'react-redux';
import { SubTitle } from '../Titles/Title'
import { useAuth0 } from '@auth0/auth0-react'

export const Balance = () => {
    const data = useSelector( store => store.transacciones.array);
    const { user } = useAuth0();
    
    if(!user) return null;
    if(data.length === 0) return null;


    let Gastos = 0;
    let Ingresos = 0;
    let sumaGastos = 0;
    let sumaIngresos = 0;
    
    const arrayGastos = data.map(data => (data.email === user.email) && (data.tipo === 'gasto') && Gastos + Math.floor(data.monto))
    const arrayIngresos = data.map(data=> (data.email === user.email) && (data.tipo === 'ingreso') && Ingresos + Math.floor(data.monto))

    for (let i = 0; i < arrayGastos.length; i++) {
        sumaGastos += arrayGastos[i];
    }
    for (let i = 0; i < arrayIngresos.length; i++) {
        sumaIngresos += arrayIngresos[i]
    }
    return (
        <div className="balance">
            <SubTitle title="Balance" />
            <div className="balance__item">
                <p>Income: $<span>{Math.floor(sumaIngresos)}</span></p>
                <p>Expenses: $<span>{sumaGastos}</span></p>
                <p>Remaining: $<span>{sumaIngresos - sumaGastos}</span></p>
            </div>
        </div>
    )
}
