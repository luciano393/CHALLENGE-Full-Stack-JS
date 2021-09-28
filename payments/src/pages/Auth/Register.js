import React from 'react'
import { ButtonComponent } from '../../components/Button/ButtonComponent'
import { Input } from '../../components/Inputs/Input'
import { Title } from '../../components/Titles/Title'
import imagen from '../../assets/images/imagen-2.png'

export const Register = () => {
    return (
        <div className="Register">
            <header>
                <Title title="Payments"/>
            </header>
            <div className="flex-container">
                <form>
                    <Input text="Username"/>
                    <Input text="Email"/>
                    <Input text="Password"/>
                    <Input text="Repeat password"/>
                    <ButtonComponent text="Register"/>
                </form>
                <div className="img-content">
                    <img src={imagen} alt="" />
                </div>
            </div>
        </div>
    )
}
