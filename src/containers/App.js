import React from 'react';
import './App.css';
import Navigation from '../components/Navigation.js'
import Logo from '../components/Logo.js'
import ImageLinkForm from '../components/ImageLinkForm.js'
import ColorRecognition from '../components/ColorRecognition.js'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Logo />
            <ImageLinkForm />
            <ColorRecognition />
        </div>
    );
}

export default App;
