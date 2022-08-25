import React from 'react'
import Text from '../Text/Text';
import "./widget.scss";

const Widget = ({title, description, footer}) => {
  return (
    <div className="widget mt">
        <div className="widget__header">
            <Text xSmall title>{title}</Text>
        </div>
        <div className="widget__body">
            <Text xSmall body2>{description}</Text>
        </div>
        <div className="widget__footer">
            <Text title xLarge>{footer}</Text>
        </div>
    </div>
  )
}

export default Widget