import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Home from './src/Screens/Home';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const App = () => {
    return (
        <>
            <Home/>
        </>
    );
}

const styles = StyleSheet.create({})

export default App;
