import React from 'react'

export default function Alert(props){
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show py-2`} role="alert">
            <strong>{(props.alert.type).toUpperCase()}</strong> : {props.alert.msg}
        </div>
    )
}
