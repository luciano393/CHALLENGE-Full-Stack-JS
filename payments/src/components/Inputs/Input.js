import React from 'react'
import { SubTitle } from '../Titles/Title'

export const Input = (props) => {
    return (
        <div className="Input-box">
            <SubTitle title={props.text} />
            <input 
            type={props.type} 
            name={props.name}
            placeholder={props.placeholder}
            value={props.value} 
            onChange={props.onChange}
            onBlur={props.onBlur}
            invalid={props.invalid}
            handleChange={props.handleChange}
            autoComplete="off"
            />
        </div>
    )
}
export const InputSelect = (props) => {
    return (
        <div className="Input-box">
            <SubTitle title={props.text} />
            <select 
            type={props.type}
            name={props.name}
            id={props.id} 
            onBlur={props.onBlur}
            invalid={props.invalid}
            onChange={props.onChange}
            value={props.value}
            >   
                <option value=''>Select</option>
                <option value="gasto">Spending</option>
                <option value="ingreso">Entry</option>
            </select>
        </div>
    )
}

