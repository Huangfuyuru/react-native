//本地存储使用 AsyncStorage
import React, { Component } from 'react'
import {View,Text,AsyncStorage,Button, FlatList, StatusBar} from 'react-native'
export default class LocalPage extends Component {
    constructor(){
        super();
        this.state={
            data:[{title:'zs'},{title:'ls'}]
        }
    }
    //异步
    storeData = async () => {
        await AsyncStorage.setItem('username','zhangsan',()=>{console.log('store success!')})
        console.log('yes')
    }
    getData = async () => {
        //返回一个Promise
        await AsyncStorage.getItem('username').then((res)=>{
            console.log(res)
        })
    }
    send = () => {
        fetch(`https://cnodejs.org/api/v1/topics`)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            console.log("请求成果")
        })
    }
    render() {
        return (
            <View>
                {/* 状态栏 */}
                <StatusBar backgroundColor="transparent" translucent={true}>
                <Button title="存储" onPress={this.storeData}/>
                <Button title="获取" onPress={this.getData}/>
                <Button title="请求title" onPress={this.send}/>
                <FlatList
                data={this.state.data}
                renderItem = {({item})=>{
                    return <View>
                        <Text>{item.title}</Text>
                    </View>
                }}
                // renderItem={({item})=>{
                //     return <View style={styles.slide2}>
                //         <Text>{item.tit}</Text>
                //     </View>
                // }}
                />
                </StatusBar>
            </View>
        )
    }
}
