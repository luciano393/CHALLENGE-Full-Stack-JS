import React, { useEffect, useState } from 'react'
import { SubTitle, Title } from '../../components/Titles/Title'
import { Menu } from '../../components/Menu/Menu';
import { ToggleMenu } from '../../components/Menu/ToggleMenu';
import { Balance } from '../../components/Balance/Balance';
import { Banner } from '../../components/Banner/Banner';
import { List } from '../../components/Transactions/List';
import { AddButton } from '../../components/Button/AddButton';
import { NavLink } from 'react-router-dom';
import { useLocation  } from 'react-router-dom';


export const Main = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const location = useLocation();
    const objectUser = location.state.params;


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
                        <Menu name={objectUser.username} email={objectUser.email}/>
                    )}
                    <button onClick={toggleNav}><ToggleMenu /></button>
                </nav>
            </header>
            <div className="flex-container">
                <Banner />
                <Balance 
                trans={props.trans}/>
                <div className="transactions">
                    <SubTitle title="Your last ten transactions"/>
                    <List trans={props.trans} user={objectUser._id}/>
                </div>
            </div>
            <NavLink to={{pathname: "/newtransaction", objectUser}}>
                <AddButton />
            </NavLink>
        </div>
    )
}
