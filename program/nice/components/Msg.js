import React, { Component } from 'react'
import {View,Text, Button} from 'react-native'
import {Actions} from 'react-native-router-flux'
export default class Msg extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    
    render() {
        return (
            <View>
                <Button title='跳转到MsgDetail页面' onPress={()=>Actions.msgdetail({id:100})}/>
                <Button title='count+1' onPress={()=>this.setState({count:1})}/>
                <Text>消息数:{this.state.count}</Text>
                <Button title="打开lightbox" onPress={()=>Actions.light()}/>
                <Button title='登陆' onPress={Actions.login}/>
                <Button title='Mylist' onPress={Actions.mylist}/>
                <Button title='本地存储' onPress={Actions.local}/>
                <Button title="MyTS" onPress={Actions.myts}/>
                <Button title="Demo1" onPress={Actions.demots}/>
            </View>
        )
    }
}
