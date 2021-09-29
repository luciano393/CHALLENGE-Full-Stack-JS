import React, { useEffect, useState } from 'react'
import { SubTitle, Title } from '../../components/Titles/Title'
import { Menu } from '../../components/Menu/Menu';
import { ToggleMenu } from '../../components/Menu/ToggleMenu';
import { Balance } from '../../components/Balance/Balance';
import { Banner } from '../../components/Banner/Banner';
import { List } from '../../components/Transactions/List';
import clienteAxios from '../../config/axios';


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

    // State de la app
    const [transactions, saveTransactions] = useState([]);

    useEffect( () => {
        const consultarAPI = () => {
        clienteAxios.get('/presupuesto')
            .then(res => {
            // colocar en el state resultados
            saveTransactions(res.data)
            })
            .catch(err => {
            console.log(err)
            })
        }
        consultarAPI();
    }, [] );

    

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
                <Balance price={props.balance}
                trans={transactions}/>
                <div className="transactions">
                    <SubTitle title="Your last ten transactions"/>
                    <List trans={transactions}/>
                </div>
            </div>
        </div>
    )
}
