import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange,onButtonSubmit,onUpload}) => {
    return(
        <div>
            <p className='f3 white pa3'>
                {"This Magic Brain will detect colors in your pictures. Give it a try !"}
            </p>
            <p className='f5 white pa3'>
                {"Enter a valid image url or browse image files in your computer."}
            </p>
            <div className="pa2 center">
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f5 link ph2 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
            <div>
                <label className='w-20 center upload-button pa2 bg-silver' htmlFor='image-button'>Browse File</label>
                <input className='icon-button' type='file' accept="image/*" id='image-button' onChange={onUpload}/>
            </div>
        </div>
    )
}

export default ImageLinkForm