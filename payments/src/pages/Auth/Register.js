import React, { useState } from 'react'
import { ButtonComponent } from '../../components/Button/ButtonComponent'
import { Input } from '../../components/Inputs/Input'
import { Title } from '../../components/Titles/Title'
import imagen from '../../assets/images/imagen-2.png'
import { NavLink } from 'react-router-dom'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'
import { useHistory  } from 'react-router'

export const Register = () => {
    const history = useHistory()
    const [user, newUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const setState = e => {
        newUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    // Enviar una petición a la API
    const createNewUser = e => {
        e.preventDefault();

        // Enviar la petición por axios
        clienteAxios.post('/signup', user)
            .then(res => {
                console.log(res);
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User has been successfully registered',
            showConfirmButton: false,
            timer: 1500
        })

        setTimeout(() => {
            history.goBack()
        }, 2000)
    }

    return (
        <div className="Register">
            <header>
                <NavLink to="/">
                    <Title title="Payments"/>
                </NavLink>
            </header>
            <div className="flex-container">
                <form onSubmit={createNewUser}>
                    <Input 
                    text="Username"
                    type="text"
                    onChange={setState}
                    name="username"
                    />
                    <Input text="Email"
                    type="text"
                    name="email"
                    onChange={setState}
                    />
                    <Input 
                    text="Password"
                    type="text"
                    name="password"
                    onChange={setState}
                    />
                    <Input 
                    text="Repeat password"
                    />
                    <ButtonComponent text="Register"
                    className="btn primary"
                    />
                </form>
                <div className="img-content">
                    <img src={imagen} alt="" />
                </div>
            </div>
        </div>
    )
}
