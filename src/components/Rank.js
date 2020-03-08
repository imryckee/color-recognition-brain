import React from 'react';

const Rank = ({isSignedIn,name,entries}) => {
    if(isSignedIn===true){
        return(
            <div>
                <div className='white f4 pa2'>
                    {`${name}, your have detected ${entries} times for now.`}
                </div>
            </div>
        )
    }else{
        return null
    }
}

export default Rank