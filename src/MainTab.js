import React from 'react';
import {Image, StyleSheet,View} from 'react-native';

import  {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './page/bottom/HomeScreen';
import HealthScreen from './page/bottom/HealthScreen';
import ServiceScreen from './page/bottom/ServiceScreen';
import MineScreen from './page/bottom/MineScreen';

const MainTab=createBottomTabNavigator(
    {
        Home:HomeScreen,
        HealthService:HealthScreen,
        Service:ServiceScreen,
        Mine:MineScreen,
    },




);


export default MainTab;
