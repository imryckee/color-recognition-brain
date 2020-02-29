import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesOption from '../components/particlesOption.js'
import Clarifai from 'clarifai'
import Navigation from '../components/Navigation.js'
import Logo from '../components/Logo/Logo.js'
import Rank from '../components/Rank.js'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.js'
import ColorRecognition from '../components/ColorRecognition.js'


const app = new Clarifai.App({apiKey: '7a4d95ae63234c00b04756627ab81528'});

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            input:"",
            imageUrl:'', 
        } 
    }

    onInputChange = (event) =>{
        this.setState({input:event.target.value})
    }

    onButtonSubmit = () =>{
        this.setState({imageUrl: this.state.input});
        app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", this.state.input).then(
            function(response) {
                console.log(response.outputs[0].data.colors);
            },
            function(err) {
            // there was an error
            }
        );
    }

    render(){
        return (
            <div className="App">
                <Particles className='particles' params={particlesOption} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                <ColorRecognition imageUrl={this.state.imageUrl}/>
            </div>
        );
    }
}

export default App;
