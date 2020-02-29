import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesOption from '../components/particlesOption.js'
import Navigation from '../components/Navigation.js'
import Logo from '../components/Logo/Logo.js'
import Rank from '../components/Rank.js'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.js'
import ColorRecognition from '../components/ColorRecognition.js'



class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Particles className='particles' params={particlesOption} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm />
                <ColorRecognition />
            </div>
        );
    }
}

export default App;
