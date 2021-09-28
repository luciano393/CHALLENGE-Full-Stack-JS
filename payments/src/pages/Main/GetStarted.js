import React from 'react'
import { SubTitle, Title } from '../../components/Titles/Title'
import imagen from '../../assets/images/imagen-5.png'
import { ButtonComponent } from '../../components/Button/ButtonComponent'

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
                    <ButtonComponent text="Get Started"/>
                </section>
            </div>
        </div>
    )
}
