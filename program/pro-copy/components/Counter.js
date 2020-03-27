import React,{Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

//类组件
export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            num:0
        }
    }
    add = ()=>{
        this.setState({
            num:this.state.num+1
        })
    }
    render() {
        return (
            <View style={styles.button1} >
              <Text>{this.state.num}</Text>
              <Button onPress={this.add} title="加一"></Button>  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button1:{
      width:50
    }
});