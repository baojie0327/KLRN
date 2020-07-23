import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

/**
 * 首页
 */
export default class ServiceScreen extends Component {

    // Service页面的配置
    static navigationOptions = {
        tabBarLabel: '服务',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../../images/service_select.png')}/>
                );
            }

            return (
                <Image style={styles.tabBarIcon} source={require('../../../images/service_normal.png')}/>
            );

        },
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>服务</Text>
                <Button
                    style={styles.buttonStyles1}
                    title={'跳转1'}
                    onPress={() => this.props.navigation.navigate('BaseUse1')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textStyle: {
        marginTop: 40,
    },

    buttonStyles1: {
        marginTop: 10,
    },


    tabBarIcon: {  // tab icon
        width: 19,
        height: 19,
    },
});
