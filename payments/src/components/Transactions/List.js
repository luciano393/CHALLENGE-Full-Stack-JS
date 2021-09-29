import React from 'react'
import { Transaction } from './Transaction';

export const List = ({trans}) => {
    console.log(trans)
    if(trans.length === 0) return null;

    return (
        <>   
          {trans.map(trans => (
              <Transaction isSubtract={(trans.tipo === 'gasto') && true} concept={trans.concepto} price={trans.monto}/>
          ))} 
        </>
    )
}
// {trans.map(trans => (
//     <h3>{trans.tipo}-{trans.concepto}-{trans.monto}</h3>
// ))}
/* <Transaction isSubtract={true} concept="comida" price="20.99" /> */
