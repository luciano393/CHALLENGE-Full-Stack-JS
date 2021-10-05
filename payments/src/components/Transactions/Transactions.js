import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useHistory } from 'react-router';
import { ConceptAdd, ConceptSubtract } from './Concept';

export const Transactions = (props) => {
    const history = useHistory();
    const { isAuthenticated } = useAuth0();

    if(!isAuthenticated) {
        history.push('/')
    }



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
