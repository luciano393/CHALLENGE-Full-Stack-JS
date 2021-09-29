import React, { useEffect, useState } from 'react'
import { SubTitle, Title } from '../../components/Titles/Title'
import { Transaction } from '../../components/Transactions/Transaction';
import { Menu } from '../../components/Menu/Menu';
import { ToggleMenu } from '../../components/Menu/ToggleMenu';
import { Balance } from '../../components/Balance/Balance';
import { Banner } from '../../components/Banner/Banner';

export const Main = (props) => {
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
                <Banner />
                <Balance price={props.balance}/>
                <div className="transactions">
                    <SubTitle title="Your last ten transactions"/>
                    <ul className="list">
                    </ul>
                </div>
            </div>
        </div>
    )
}
