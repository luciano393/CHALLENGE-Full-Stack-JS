import React from 'react'
import { SubTitle } from '../Titles/Title'

export const Input = (props) => {
    return (
        <div className="Input-box">
            <SubTitle title={props.text} />
            <input type="text"/>
        </div>
    )
}
