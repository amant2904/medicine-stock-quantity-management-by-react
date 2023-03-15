import React from 'react'

export default function Input(props) {
    return (
        <React.Fragment>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </React.Fragment>
    )
}
