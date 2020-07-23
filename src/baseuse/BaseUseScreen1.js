import React, {Component} from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';
import PropsTest from '../page/bottom/PropsTest';

export default class BaseUseScreen1 extends Component {

    static navigationOptions = {
        title: '基本使用',
        headerStyle: {
            backgroundColor:'#f4511e'
        },
        headerTintColor:'#fff',  // 字体的颜色
        headerTintStyle:{
            fontWeight: 'bold',
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text >基本使用</Text>
                <Button
                    title={'跳转BaseUse1'}
                    onPress={()=>this.props.navigation.push('BaseUse1')}/>

                <Button
                    title={'去首页'}
                    onPress={()=>this.props.navigation.navigate('Main')}/>

                <Button
                    title={'返回'}
                    onPress={()=>this.props.navigation.goBack()}/>
                <Button
                    title={'跳转BaseUse2'}
                    onPress={()=>this.props.navigation.navigate('BaseUse2',{
                        itemId:86,
                        itemStr:'这是跳转传过来的参数',
                    })}/>
                <PropsTest name='Jackson'/>
            </View>

        );
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems: 'center',
    },

});
