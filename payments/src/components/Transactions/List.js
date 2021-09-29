import React from 'react'
import { Link } from 'react-router-dom';
import { Transactions } from '../Transactions/Transactions'

export const List = ({trans}, props) => {

    if(trans.length === 0) return null;

    return (
        <>   
          {trans.map(trans => (
              <Link to={`/transaction/${trans._id}`} key={trans._id}>
                <Transactions isSubtract={(trans.tipo === 'gasto') && true} concept={trans.concepto} price={trans.monto} date={trans.fecha}/>
              </Link>
          ))} 
        </>
    )
}

// onClick={togglePopEdit}