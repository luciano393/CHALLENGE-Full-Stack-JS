import React from 'react'
import { ConceptAdd, ConceptSubtract } from './Concept';



export const Transaction = (props) => {
    const isSubtract = props.isSubtract;
    if (isSubtract) {
        return (
        <div className="Transaction">
            <ConceptSubtract text={props.concept}/>
            <p>$ {props.price}</p>
        </div>
        )
    }
    return (
        <div className="Transaction">
            <ConceptAdd text={props.concept}/>
            <p>$ {props.price}</p>
        </div>
    )
}
