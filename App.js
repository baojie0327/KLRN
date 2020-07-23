/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainTab from './src/MainTab';
import BaseUseScreen1 from './src/baseuse/BaseUseScreen1';
import BaseUseScreen2 from './src/baseuse/BaseUseScreen2';


const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: MainTab,
            navigationOptions: {
                header:null
            },
        },
        BaseUse1:BaseUseScreen1,
        BaseUse2:BaseUseScreen2,
    },
);

const AppContainer=createAppContainer(AppNavigator);

class App extends Component {

    render() {
        return (
            <AppContainer/>
        );
    }

}



export default App;
