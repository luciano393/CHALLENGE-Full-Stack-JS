import React from 'react'
import { GrClose } from 'react-icons/gr'

export const CloseBtn = (props) => {

    return (
        <button onClick={props.onClick} className="CloseBtn">
            <GrClose size={30}/>
        </button>
    )
}
