import React,{Component} from 'react';
import {Text} from 'react-native';

/*
    Props的使用
    大多数组件在创建的时候，可以用各种参数来进行定制，这些用于定制的参数，称为props
    它是父组件传递给子组件的，而且一经指定，在指定的组件的生命周期中不再改变
    自定义组件也可使用props，只需在render函数中引用this.props
 */

export default class PropsTest extends Component{

    render(){
        return(
            <Text>{this.props.name}</Text>
        );
    }


}
