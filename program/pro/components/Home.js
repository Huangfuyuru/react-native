import React, { Component } from 'react'
import {View,Text, Image,TextInput,ScrollView,StyleSheet, StatusBar,Dimensions, TouchableOpacity, FlatList} from 'react-native'
import {Icon} from '@ant-design/react-native'
const {width} = Dimensions.get('window')
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            lists:[
                {
                    icon:'fork',
                    name:'居家维修保养',
                },
                {
                    icon:'alert',
                    name:'住宿优惠',
                },
                {
                    icon:'amazon',
                    name:'出行接送',
                },
                {   
                    icon:'yuque',
                    name:'E族活动',
                },
            ]
        }
    }
    render() {
        return (
            <View style={styles.all}>
                <View style={styles.style2}>
                    <View style={styles.style3}>
                        <Icon name="search" style={styles.iconStyle}/>
                        <TextInput placeholder="请输入您要搜索的关键字"/>
                    </View>
                    <View>
                        <Icon name="shopping-cart" style={styles.iconStyle}/>
                    </View>
                </View>

                <View style={{height:200}}>
                    <ScrollView horizontal={true} pagingEnabled={true} contentContainerStyle={{height:220}}>
                        <View style={styles.style1}>
                            <Image style={styles.imageStyle} source={{uri:'http://pic1.win4000.com/wallpaper/2020-02-27/5e57258de761a.jpg'}}/>
                        </View>
                        <View style={styles.style1}>
                            <Image style={styles.imageStyle} source={{uri:'http://pic1.win4000.com/wallpaper/2020-02-27/5e57258ce0778.jpg'}}/>
                        </View>
                        <View style={styles.style1}>
                            <Image style={styles.imageStyle} source={{uri:'http://pic1.win4000.com/wallpaper/2020-02-27/5e57258f4f7b0.jpg'}}/>
                        </View>
                    </ScrollView>
                </View>

                <View>
                    <FlatList
                    data={this.state.lists}
                    renderItem={({item})=>{
                        return <View style={styles.style5}>
                            <View style={styles.style6}>
                                <Icon name={item.icon} style={styles.iconStyle}/>
                            </View>
                            <Text style={{width:200,marginRight:150}}>{item.name}</Text>
                            <Icon name="right"/>
                        </View>
                    }}
                    />
                </View>

                <View style={styles.style8}>
                    <TouchableOpacity style={styles.style7}>
                        <Text style={styles.textStyle}>发布需求</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    all:{
        flex:1,
        backgroundColor:'#f4f4f4'
    },  
    style1:{
        width,
    },
    style2:{
        flexDirection:'row',
        backgroundColor:'#f23030',
        justifyContent:'space-around',
        alignItems:'center'
    },
    style3:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.8)',
        height:'70%',
        width:'85%',
        borderColor:'white',
        borderRadius:50,
        paddingLeft:20
    },
    style4:{
        height:60,
        width:60,
        borderRadius:30
    },
    style5:{
        flexDirection:'row',
        alignItems:'center',
        width,
        height:70,
        marginTop:8,
        backgroundColor:'white',
        paddingLeft:20
    },
    style6:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'#ffcccc',
        marginRight:30,
        alignItems:'center',
        justifyContent:'center'
    },
    style7:{
        backgroundColor:'#f23030',
        width:300,
        height:45,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    style8:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    imageStyle:{
        width,
        height:220
    },
    iconStyle:{
        fontSize:40,
        color:'white'
    },
    textStyle:{
        color:'white',
        fontSize:15
    }
})
