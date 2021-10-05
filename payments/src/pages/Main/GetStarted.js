import React from 'react'
import { SubTitle, Title } from '../../components/Titles/Title'
import imagen from '../../assets/images/imagen-5.png'

import { LoginButton } from '../Auth/LoginButton';

import { useAuth0 } from "@auth0/auth0-react";

export const GetStarted = () => {

    // const {isLoading } = useAuth0();

    // if(isLoading) {
    //     return <div>Loading...</div>
    // }
    
    
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
                    <LoginButton className="btn primary"/>
                </section>
            </div>
        </div>
    )
}
