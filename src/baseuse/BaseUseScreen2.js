import React, {Component} from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';

export default class BaseUseScreen2 extends Component {

    static navigationOptions = {
        title: '基本使用2',
    };

    render() {

        const {navigation} =this.props;

        return (
            <View style={styles.container}>
                <Text >基本使用2</Text>
                <Text>
                    itemId:{JSON.stringify(navigation.getParam('itemId','NO-ID'))}
                </Text>

                <Text>
                    itemStr:{JSON.stringify(navigation.getParam('itemStr','NO_STR'))}
                </Text>

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
