import React from 'react'
import { ButtonComponent } from '../../components/Button/ButtonComponent'
import { Input } from '../../components/Inputs/Input'
import { Parrafo, Title } from '../../components/Titles/Title'
import imagen from '../../assets/images/imagen-4.png'

export const Login = () => {
    return (
        <div className="Login">
            <header>
                <Title title="Payments"/>
            </header>
            <div className="flex-container">
                <form>
                    <Input text="User"/>
                    <Input text="Password"/>
                    <ButtonComponent text="Login"/>
                    <div className="register">
                        <Parrafo text="Register" />
                    </div>
                </form>
                <div className="img-content">
                    <img src={imagen} alt="" />
                </div>
            </div>
        </div>
    )
}
