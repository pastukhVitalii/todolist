import React from 'react';
import './Input.css';

type OwnPropTypes = {
    value: string
    type?: string
    placeholder: string
    error?: boolean
    onChange: (e: any) => void
}

const Input = (props: OwnPropTypes) => {
    const errorClass = props.error? 'error' : '';
    return (
      <div className='input'>
        <input type="text" placeholder= {props.placeholder}
               className={`${props.type} + ${errorClass}`}
               value={props.value}
               onChange={props.onChange}
               autoFocus={true}/>
      </div>
    );
}

export default Input;
