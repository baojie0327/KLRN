import React, {Component} from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';

/**
 * 首页
 */
export default class HomeScreen extends Component {

    // Home页面的配置
    static navigationOptions = {
        tabBarLabel:'首页',
        tabBarIcon:({focused, horizontal, tintColor}) =>{
            if (focused){
                return(
                    <Image style={styles.tabBarIcon} source={require('../../../images/home_select.png')}/>
                );
            }
            return(
                <Image style={styles.tabBarIcon} source={require('../../../images/home_normal.png')}/>
            );

        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>首页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {  // 整个容器
        flex: 1,
    },
    tabBarIcon:{  // tab icon
        width:19,
        height:19,
    }
});
