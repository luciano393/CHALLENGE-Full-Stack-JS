import React from 'react'
import { SubTitle } from '../Titles/Title'

export const Balance = (props) => {
    return (
        <div className="balance">
            <SubTitle title="Balance" />
            <div className="balance__item">
                <span>${props.price}</span>
            </div>
        </div>
    )
}
