import React from 'react';
import './ColorBlock.css'
import TEXTColor from 'textcolor'


const ColorBlock = ({hex,name,percent}) => {
    const textcolor = TEXTColor.findTextColor(hex);
    return(
        <li className="color-block" style={{backgroundColor: hex,height:'40px',color:textcolor}}>
            <div className="color-info"><strong>{name}</strong> {hex}</div>
            <div className="color-percent">{percent}</div>
        </li>
    )
}

export default ColorBlock