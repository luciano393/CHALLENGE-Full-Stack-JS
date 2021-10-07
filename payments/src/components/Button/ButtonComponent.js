import React from 'react'

export const ButtonComponent = (props) => {
    return (
        <button className={props.className} type="submit" onClick={props.onClick}
        disabled={props.disabled}
        >{props.text}</button>
    )
}
