/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// AppRegistry.registerComponent(appName, () => App);


//import library to help create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList';

//create a component
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Albums'}/>
            <AlbumList/>
        </View>
    );
};

//render it to the device
AppRegistry.registerComponent(appName, () => App);