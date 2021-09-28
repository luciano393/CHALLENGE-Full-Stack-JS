import React from 'react'
import { GrAdd, GrSubtract } from "react-icons/gr";

export const ConceptAdd = (props) => {
    return (
        <div className="concept">
            <p><GrAdd size={14}/> <span>{props.text}</span></p>
        </div>
    )
}
export const ConceptSubtract = (props) => {
    return (
        <div className="concept">
            <p><GrSubtract size={14}/> <span>{props.text}</span></p>
        </div>
    )
}
