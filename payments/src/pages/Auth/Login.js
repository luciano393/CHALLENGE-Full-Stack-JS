import React, { useState } from 'react'
import { ButtonComponent } from '../../components/Button/ButtonComponent'
import { Input } from '../../components/Inputs/Input'
import { Title } from '../../components/Titles/Title'
import imagen from '../../assets/images/imagen-4.png'
import { NavLink } from 'react-router-dom';
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router'


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount ] = useState([]);
    const [logeado, setLogeado ] = useState(false);
    const history = useHistory();

    const setStateUsername = e => {
        setUsername(e.target.value)
    }
    const setStatePassword = e => {
        setPassword(e.target.value)
    }

    const findUser = (e) => {
        e.preventDefault();
        // Consultar por axios
        clienteAxios.get(`signup/${username}`)
            .then(res => {
                setAccount(res.data)      
        })
            .catch(err => {
                console.log(err)
        })
        const objectUser = account[0]

        if (objectUser) {
            if(objectUser.password === password) {
                setLogeado(true)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Session successfully started',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(() => {
                    history.push('/main')
                }, 2000)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'The password entered is incorrect',
                })
            } 
        }
    }

    return (
        <div className="Login">
            <header>
                <NavLink to="/">
                    <Title title="Payments"/>
                </NavLink>
            </header>
            <div className="flex-container">
                <form onSubmit={findUser}>
                    <Input 
                    text="Username"
                    type="text"
                    name="username"
                    onChange={setStateUsername}
                    />
                    <Input 
                    text="Password"
                    type="text"
                    name="password"
                    onChange={setStatePassword}
                    />
                    <NavLink to="/" className="forget">Did you forget your password?</NavLink>
                    <ButtonComponent text="Login"
                    className="btn primary"
                    />
                    <div className="register">
                        <NavLink to="/register" className="Parrafo">Register</NavLink>
                    </div>
                </form>
                <div className="img-content">
                    <img src={imagen} alt="" />
                </div>
            </div>
        </div>
    )
}
