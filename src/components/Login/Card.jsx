import React from 'react'
import Text from '../Text/Text'
import './login.scss'

const Card = ({title, image}) => {
  return (
    <div className="login-card-container">
        <div className="login-card-text-container">
          <Text title>{title}</Text>
        </div>
        <div className="login-card-image-container">
            <div className="login-card-image-wrapper">
                <img src={image} alt="" className="login-card-image" />
            </div>
        </div>
    </div>
  )
}

export default Card