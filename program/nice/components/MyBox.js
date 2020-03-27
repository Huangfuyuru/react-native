import React, { Component } from 'react'
import {View,Text,StyleSheet,Button,Animated, Easing} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {WebView} from 'react-native-webview'
export default class MyBox extends Component {
    constructor(){
        super();
        this.state={
            wid:new Animated.Value(100),
            hei:new Animated.Value(80),
            op:new Animated.Value(0)
        }
    }
    componentDidMount(){
        setTimeout(()=> {
            Animated.timing(this.state.wid,{
                toValue:200,
                easing:Easing.bounce//动画效果 
            }).start();
            Animated.timing(this.state.hei,{
                toValue:160
            }).start();
            Animated.timing(this.state.op,{
                toValue:1
            }).start();
        },1000)
        
    }
    back = ()=>{
        Animated.timing(this.state.wid,{
            toValue:100,
            easing:Easing.bounce//动画效果 
        }).start(Actions.pop);
    }
    render() {
       
        return (
            <View style={styles.container}>
                <Animated.View style={{width:this.state.wid,height:this.state.hei,backgroundColor:'pink',opacity:this.state.op}}>
                    <Button title="返回" onPress={this.back}/>
                    <WebView source={{uri:'https://www.baidu.com'}}/>
                    <Text>你好</Text>
                </Animated.View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        
        // backgroundColor:'transparent',
        backgroundColor:'rgba(50,50,50,0.2)',
        position:'absolute',
        left:0,
        top:0,
        right:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
    },
    innerBox:{
        width:'80%',
        height:'40%',
        backgroundColor:'pink'
    }
})