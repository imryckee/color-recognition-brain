import React from 'react';

const Navigation = ({onRouteChange,onSigninStatusChange,isSignedIn}) => {
    if(isSignedIn){
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
                <p onClick={()=>{onRouteChange('home');onSigninStatusChange(false)}} className='f4 link dim white pa3 pointer underline'>Sign Out</p>
            </nav>
        )
    }else{
        return(
            <nav style={{display:'flex',justifyContent:'space-between'}}>
                <p onClick={()=>{onRouteChange('home');onSigninStatusChange(false)}} className='f4 link dim white pa3 pointer underline'>Home Page</p>
                <div style={{display:'flex',justifyContent:'flex-end'}}>
                    <p onClick={()=>{onRouteChange('signin');onSigninStatusChange(false)}} className='f4 link dim white pa3 pointer underline'>Sign In</p>
                    <p onClick={()=>{onRouteChange('register');onSigninStatusChange(false)}} className='f4 link dim white pa3 pointer underline '>Register</p>
                </div>
            </nav>
        )
    }
}

export default Navigation