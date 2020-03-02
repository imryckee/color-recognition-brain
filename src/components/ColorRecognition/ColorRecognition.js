import React from 'react';
import ColorBlock from './ColorBlock.js';

const ColorRecognition = ({link,colors,linkstatus}) => {
    if(linkstatus==='true'){
        const colorBlockList = colors.map(colorinfo => {
            return <ColorBlock hex={colorinfo.hex} name={colorinfo.name} percent={colorinfo.percent} key={colorinfo.hex}/>
        })
        return(
            <div className='center mt3 mb3'>
                <div className='pa2'>
                    <img src={link} alt='' width='500px'/>
                </div>
                <section className='pa1' style={{width:"500px"}}>
                    <ul className='pa1'>
                        {colorBlockList}
                    </ul>
                </section>
            </div>
        )
    }else if(linkstatus==='invalidUrl'){
        return <p className='red f3'>Please enter a valid image url.</p>
    }else if(linkstatus==='invalidFile'){
        return <p className='red f3'>Please choose an image file.</p>
    }else{
        return null;
    }
}

export default ColorRecognition