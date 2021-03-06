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
        return <div>
                    <p className='light-red f3'>This isn't a valid image url. Please enter again.</p>
                    <p className='gold f4'>Or you tried it too fast, slow down !</p>
                </div>
    }else if(linkstatus==='invalidFile'){
        return <div>
                    <p className='light-red f3'>This isn't an image file. Please upload again.</p>
                    <p className='gold f4'>Or you tried it too fast, slow down !</p>
                </div>
    }else{
        return null;
    }
}

export default ColorRecognition