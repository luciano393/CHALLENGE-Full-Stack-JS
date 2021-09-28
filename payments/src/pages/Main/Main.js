import React, { useEffect, useState } from 'react'
import { SubTitle, Title } from '../../components/Titles/Title'
import imagen from '../../assets/images/imagen.png'
import { Transaction } from '../../components/Transactions/Transaction';
import { Menu } from '../../components/Menu/Menu';
import { ToggleMenu } from '../../components/Menu/ToggleMenu';

export const Main = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
        setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
  }, [])

    return (
        <div className="Main">
            <header>
                <Title title="Payments" />
                <nav>
                    {(toggleMenu || screenWidth > 980) && (
                        <Menu />
                    )}
                    <button onClick={toggleNav}><ToggleMenu /></button>
                </nav>
            </header>
            <div className="flex-container">
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
                    <Transaction isSubtract={false} concept="Salario" price="450,50"/>
                </ul>
            </div>
        </div>
    )
}
