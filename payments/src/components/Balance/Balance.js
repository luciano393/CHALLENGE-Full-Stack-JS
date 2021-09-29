import React from 'react'
import { SubTitle } from '../Titles/Title'

export const Balance = (props) => {

    const restante = () => {
        
    }

    return (
        <div className="balance">
            <SubTitle title="Balance" />
            <div className="balance__item">
                <span>${props.price}</span>
            </div>
        </div>
    )
}
