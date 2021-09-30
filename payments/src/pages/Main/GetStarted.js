import React from 'react'
import { SubTitle, Title } from '../../components/Titles/Title'
import imagen from '../../assets/images/imagen-5.png'
import { ButtonComponent } from '../../components/Button/ButtonComponent'
import { NavLink } from 'react-router-dom'

export const GetStarted = () => {
    return (
        <div className="GetStarted">
            <header>
                <Title title="Payments"/>
            </header>
            <div className="flex-container">
                <div className="img-content">
                    <img src={imagen} alt="" />
                </div>
                <section>
                    <SubTitle title="Welcome to Payments" />
                    <p className="Parrafo">
                        Payments will keep a record of your daily transactions
                    </p>
                    <NavLink to="/login">
                        <ButtonComponent text="Get Started" 
                        className="btn primary"
                        />
                    </NavLink>
                </section>
            </div>
        </div>
    )
}
