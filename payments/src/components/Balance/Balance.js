import React from 'react'
import { SubTitle } from '../Titles/Title'

export const Balance = ({trans, user}) => {
    let Gastos = 0;
    let Ingresos = 0;
    let sumaGastos = 0;
    let sumaIngresos = 0;
    
    const arrayGastos = trans.map(trans => ((trans.autor === user) && (trans.tipo === 'gasto') && Gastos + Math.floor(trans.monto)))
    const arrayIngresos = trans.map(trans => ((trans.autor === user) && (trans.tipo === 'ingreso') && Ingresos + Math.floor(trans.monto)))

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
                <p>Ingresado: $<span>{Math.floor(sumaIngresos)}</span></p>
                <p>Gastado: $<span>{sumaGastos}</span></p>
                <p>Restante $<span>{sumaIngresos - sumaGastos}</span></p>
            </div>
        </div>
    )
}
