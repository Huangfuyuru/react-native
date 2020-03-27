//钉钉搜索栏
import React from 'react'
import {Text,View,StyleSheet, TouchableOpacity,Image, TextInput} from 'react-native'
import {Grid,Icon} from '@ant-design/react-native'
const DingHead = () => {
    return (
        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            height:35,
            marginBottom:10
        }}>
            <View style={{
                width:'80%',
                backgroundColor:'#ccc',
                borderRadius:20,
                flexDirection:'row',
                alignItems:'center',
                paddingLeft:20,
                marginRight:10
            }}>
                <Icon name="user" color="blue"/>
                <TextInput placeholder="搜索"/>
            </View>
            <TouchableOpacity style={{
                width:35,
                height:35,
                borderWidth:1,
                borderColor:'#ccc',
                borderRadius:22,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text style={{
                    color:'#000',
                    fontSize:20
                }}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default DingHead;