import React from 'react'
import './input.scss'

const Input = ({id, type, label}) => {
  return (
    <div className='input-container'>
        <input id={id} type={type} className={`input form-control`} autoComplete={`off`} placeholder={` `}/>
        <label htmlFor={id} className="input-label">{label}</label>
    </div>
  )
}

export default Input