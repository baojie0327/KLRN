import React,{Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

/**
 * 首页
 */
export default class MineScreen extends Component{

    // Mine页面的配置
    static navigationOptions = {
        tabBarLabel:'服务',
        tabBarIcon:({focused, horizontal, tintColor}) =>{
            if (focused){
                return(
                    <Image style={styles.tabBarIcon} source={require('../../../images/mine_select.png')}/>
                );
            }

            return(
                <Image style={styles.tabBarIcon} source={require('../../../images/mine_normal.png')}/>
            );

        }
    };

    render(){
        return(
            <View style={styles.container}>
                <Text>我的</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    tabBarIcon:{  // tab icon
        width:19,
        height:19,
    }
});
