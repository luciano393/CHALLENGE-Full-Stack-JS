import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Transactions } from '../Transactions/Transactions'

export const List = () => {
    const data = useSelector( store => store.transacciones.array);
    const { user } = useAuth0();

    if(!user) return null;
    
    return (
        <>   
          {data.map(data => (
              <Link to={`/transaction/${data._id}`} key={data._id}>
                {(user.email === data.email) && <Transactions isSubtract={(data.tipo === 'gasto') && true} concept={data.concepto} price={data.monto} date={data.fecha}/>}
              </Link>
          ))} 
        </>
    )
}
