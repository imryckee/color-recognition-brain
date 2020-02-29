import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return(
        <div>
            <p className='f3 white'>
                {"This Magic Brain will detect colors in your pictures. Give it a try !"}
            </p>
            <div className="pa2 center">
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f5 link ph2 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm