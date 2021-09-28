import React from 'react'
import { SubTitle, Title } from '../../components/Titles/Title'
import imagen from '../../assets/images/imagen.png'
import { Transaction } from '../../components/Transactions/Transaction';

export const Main = () => {
    return (
        <div className="Main">
            <header>
                <Title title="Payments" />
            </header>
            <div className="banner">
                <p>Manage your money well</p>
                <img src={imagen} alt="" />
            </div>
            <div className="balance">
                <SubTitle title="Balance" />
                <div className="balance__item">
                    <span>$400,99</span>
                </div>
            </div>
            <ul className="list">
                <SubTitle title="Your last ten transactions"/>
                <Transaction isSubtract={true} concept="Cine" price="25,25"/>
                <Transaction isSubtract={true} concept="Cine" price="25,25"/>
                <Transaction isSubtract={false} concept="Cine" price="25,25"/>
            </ul>
        </div>
    )
}
