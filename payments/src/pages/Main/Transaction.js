import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ButtonComponent } from '../../components/Button/ButtonComponent'
import { Title } from '../../components/Titles/Title'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'
import { useAuth0 } from '@auth0/auth0-react'

export const Transaction = (props) => {
    let history = useHistory()

    const { isAuthenticated } = useAuth0();

    if(!isAuthenticated) {
        history.push('/')
    }


    if(props.transaction === []) {
        history.push('/main');
        return null;
    }

    // Extraer por props
    const { transaction: {concepto, fecha, monto, tipo, _id } } = props;

    // Elimina un registro
    const deleteTransaction = _id => {   
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8eb6f3',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {

                // Allerta de eliminado
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )

                // Eliminado de la base de datos
                clienteAxios.delete(`/presupuesto/${_id}`)
                .then(res => {
                    props.saveConsult(true);
                    history.push('/main');
                })
                .catch(error => {
                    console.log(error)
                })

            }
        })
    }

    return (
        <div className="Transaction">
            <header>
                <Title title="Transaction"/>
            </header>
            <div className="transaction__container">
                <ul>
                    <li className="transaction__item">
                        <p>Concept: <span>{concepto}</span></p>
                    </li>
                    <li className="transaction__item">
                        <p>Amount: <span>{monto}</span></p>
                    </li>
                    <li className="transaction__item">
                        <p>Type: <span>{tipo}</span></p>
                    </li>
                    <li className="transaction__item">
                        <p>Date: <span>{fecha}</span></p>
                    </li>
                </ul>
                <ButtonComponent text="Delete"
                onClick={ () => deleteTransaction(_id)}
                className="btn secondary"
                /> 
                <Link to="/main">
                    <ButtonComponent text="Back to main"
                    className="btn primary"
                    />
                </Link> 
            </div>
        </div>
    )
}
