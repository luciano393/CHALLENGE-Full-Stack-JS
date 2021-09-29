import React from 'react'
import imagen from '../../assets/images/imagen.png'

export const Banner = () => {
    return (
        <div className="banner">
            <p>Manage your money well</p>
            <img src={imagen} alt="" />
        </div>
    )
}
