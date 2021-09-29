import React from 'react'

export const ButtonComponent = (props) => {
    return (
        <button className="btn" type="submit" onClick={props.onClick}>{props.text}</button>
    )
}
