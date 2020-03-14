import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange,onSubmitDetect,onUpload}) => {
    return(
        <div>
            <p className='f3 white pa2'>
                {"This Magic Brain will detect colors in your pictures. Give it a try !"}
            </p>
            <div className="pa2 center">
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' placeholder ='Enter an image url' onChange={onInputChange}/>
                    <button className='w-30 grow f5 link ph2 pv2 dib white bg-light-purple' onClick={onSubmitDetect}>Detect</button>
                </div>
            </div>
            <div>
                <label className='w-20 center upload-button pa2 bg-light-silver mt4 mb4' htmlFor='image-button'>Upload Image</label>
                <input className='icon-button' type='file' accept="image/*" id='image-button' onChange={onUpload}/>
            </div>
        </div>
    )
}

export default ImageLinkForm