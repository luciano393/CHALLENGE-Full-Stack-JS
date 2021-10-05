import React from 'react'
import { LogoutButton } from '../../pages/Auth/LogoutButton'
import { Profile } from '../../pages/Auth/Profile'

export const Menu = () => {

    return (
        <div className="menu">
            <div className="profile">
                <Profile />
            </div>
            <LogoutButton className="btn primary"/>
        </div>
    )
}
