import React from 'react'
import { GrAdd, GrSubtract } from "react-icons/gr";


export const Transaction = (props) => {
    return (
        <div className="Transaction">
            <div className="concept">
                <div className="concept__icon"><GrSubtract size={18}/>
                </div>
                <div className="concept__item">
                    Comida
                </div>
            </div>
            <div className="price">
                <p>$<span>49,99</span></p>
            </div>
        </div>
    )
}
