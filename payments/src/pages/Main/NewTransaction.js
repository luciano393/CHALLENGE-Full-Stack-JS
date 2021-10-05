import React, { useState } from 'react'
import { ButtonComponent } from '../../components/Button/ButtonComponent'
import { Input, InputSelect } from '../../components/Inputs/Input'
import { Title } from '../../components/Titles/Title'
import clienteAxios from '../../config/axios'
import { Link, useHistory } from 'react-router-dom'
import { CloseBtn } from '../../components/Button/CloseBtn'
import { useAuth0 } from '@auth0/auth0-react'

export const NewTransaction = (props) => {
    const { user, isAuthenticated } = useAuth0();
    let history = useHistory()

    if(!isAuthenticated) {
        history.push('/')
    }


    // Generar state como objeto
    const [transaction, saveTransaction] = useState({
        concepto: '',
        monto: '',
        fecha: '',
        tipo: '',
        email: user.email
    });

    // Lea los datos del formulario
    const setState = e => {
        saveTransaction({
            ...transaction,
            [e.target.name] : e.target.value
        })
    }
    // Enviar una petición a la API
    const createNewTransaction = e => {
        e.preventDefault();

        // Enviar la petición por axios
        clienteAxios.post('/presupuesto', transaction)
            .then(res => {
                console.log(res);

            props.saveConsult(true);

            history.goBack()
        })

    }
    return (
        <div className="NewTransaction">
            <div className="content">
                <div className="heading">
                    <Title title='New'/>
                    <Link to="/main">
                        <CloseBtn />
                    </Link>
                </div>
                <div className="content-form">
                    <form onSubmit={createNewTransaction}>
                        <InputSelect text="Type" 
                        id="type"
                        name="tipo"
                        onChange={setState}
                        />
                        <Input 
                        text="Concept"
                        type="text"
                        id="concept"
                        name="concepto"
                        placeholder="Enter a new expense or income"
                        onChange={setState}
                        />
                        <Input 
                        text="Amount"
                        type="text"
                        id="amount"
                        name="monto"
                        placeholder="99.99"
                        onChange={setState}
                        />
                        <Input 
                        text="Date"
                        type="text"
                        id="date"
                        name="fecha"
                        placeholder="DD-MM-AAAA"
                        onChange={setState}
                        />
                        <ButtonComponent text="Add" 
                        className="btn primary"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
