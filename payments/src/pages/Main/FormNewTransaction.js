import React, { useState } from 'react'
import { ButtonComponent } from '../../components/Button/ButtonComponent'
import { Input, InputSelect } from '../../components/Inputs/Input'
import { Title } from '../../components/Titles/Title'
import clienteAxios from '../../config/axios'
import { Link, useHistory } from 'react-router-dom'
import { CloseBtn } from '../../components/Button/CloseBtn'

import { useAuth0 } from '@auth0/auth0-react'
import { Formik } from 'formik';
import Swal from 'sweetalert2'

export const FormNewTransaction = (props) => {
    const { user, isAuthenticated } = useAuth0();

    let history = useHistory()

    if(!isAuthenticated) {
        history.push('/')
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
                <Formik 
                    initialValues={{
                        concepto: '',
                        monto: '',
                        fecha: '',
                        tipo: '',
                        email: user.email
                    }}  
                    validate={(values) => {
                        const errors = {};

                        if (!values.concepto) {
                            errors.concepto = "Required";
                        }

                        if (!values.monto) {
                            errors.monto = "Required";
                        } else if (!/^(\d+)$|^(\d+\.{1}\d{2})$/.test(values.monto)) {
                            errors.monto = "Invalid amount";
                        }

                        if (values.tipo === '') {
                            errors.tipo = "Type of expense required";
                        }

                        return errors;
                    }} 
                    onSubmit={(values, {setSubmitting }) => {
                        setTimeout( () => {
                            clienteAxios.post('/presupuesto', values)
                                .then(res => {
                                    console.log(res);
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Transaction added successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                    props.saveConsult(true);
                                    history.goBack()
                                })
                            setSubmitting(false);
                        }, 250)
                    }} 
                    >
                    {(props) => {
                        const {
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <InputSelect text="Type" 
                                id="type"
                                name="tipo"
                                onChange={handleChange}
                                invalid={errors.tipo && touched.tipo}
                                onBlur={handleBlur}
                                value={values.tipo}
                                />
                                <Input 
                                text="Concept"
                                type="text"
                                id="concept"
                                name="concepto"
                                placeholder="Enter a new expense or income"
                                onChange={handleChange}
                                invalid={errors.concepto && touched.concepto}
                                onBlur={handleBlur}
                                value={values.concepto}
                                />
                                <Input 
                                text="Amount"
                                type="text"
                                id="amount"
                                name="monto"
                                placeholder="99.99"
                                onChange={handleChange}
                                invalid={errors.monto && touched.monto}
                                onBlur={handleBlur}
                                value={values.monto}
                                />
                                <Input 
                                text="Date"
                                type="text"
                                id="date"
                                name="fecha"
                                placeholder="DD/MM/AAAA"
                                onChange={handleChange}
                                invalid={errors.fecha && touched.fecha}
                                onBlur={handleBlur}
                                value={values.fecha}
                                />
                                <ButtonComponent text={isSubmitting ? `Loading` : `Submit`} 
                                className="btn primary"
                                disabled={isSubmitting}
                                />
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    )
}


