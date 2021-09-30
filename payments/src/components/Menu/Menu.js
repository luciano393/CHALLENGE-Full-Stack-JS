import React from 'react'
import { ButtonComponent } from '../Button/ButtonComponent'
import { SubTitle } from '../Titles/Title'
import avatar from '../../assets/images/avataaars.png'

export const Menu = () => {
    

    return (
        <div className="menu">
            <div className="profile">
                <div className="profile__avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="profile__info">
                    <SubTitle title="Luciano"/>
                    <p>luciano39340268@gmail.com</p>
                </div>
            </div>
            <ButtonComponent text="Log Out"
            className="btn primary"
            />
        </div>
    )
}
