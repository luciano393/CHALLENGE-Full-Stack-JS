import React from 'react'
import { ConceptAdd, ConceptSubtract } from './Concept';



export const Transactions = (props) => {
    const isSubtract = props.isSubtract;
    if (isSubtract) {
        return (
            <div className="Transactions" onClick={props.onClick}>
                <ConceptSubtract text={props.concept}/>
                <p>$ {props.price} <span
                className="date">{props.date}</span>
                </p>
            </div>
        )
    }
    return (
        <div className="Transactions" onClick={props.onClick}>
            <ConceptAdd text={props.concept}/>
            <p>$ {props.price} <span
             className="date">{props.date}</span></p>
        </div>
    )
}
