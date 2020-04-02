import React, { Component } from 'react'
import {View,Text, Image,TextInput,ScrollView,StyleSheet, StatusBar,Dimensions, TouchableOpacity, FlatList} from 'react-native'
import {Icon} from '@ant-design/react-native'
const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;
import Swiper from 'react-native-swiper';
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

                <View style={{height:devHeight*0.25}}>
                    <Swiper showsButtons={true} autoplay={true}>
                        <View>
                            <Image style={{height:devHeight*0.25,width:devWidth}} source={require('../assets/lun.png')}/>
                        </View>
                        <View>
                            <Image style={{height:devHeight*0.25,width:devWidth}} source={require('../assets/lun2.jpg')}/>
                        </View>
                        <View>
                            <Image style={{height:devHeight*0.25,width:devWidth}} source={require('../assets/lun.png')}/>
                        </View>
                    </Swiper>
                </View>

                <View>
                    <FlatList
                    data={this.state.lists}
                    renderItem={({item})=>{
                        return <View style={styles.style5}>
                            <View style={styles.style6}>
                                <Icon name={item.icon} style={styles.iconStyle}/>
                            </View>
                            <Text style={{width:devWidth*0.6,marginRight:devWidth*0.1}}>{item.name}</Text>
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
        width:devWidth,
    },
    style2:{
        flexDirection:'row',
        backgroundColor:'#f23030',
        justifyContent:'space-around',
        alignItems:'center',
        height:devWidth*0.1
    },
    style3:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.8)',
        height:devHeight*0.04,
        width:devWidth*0.85,
        borderColor:'white',
        borderRadius:devWidth*0.04*0.5,
        paddingLeft:devWidth*0.02
    },
    style4:{
        height:60,
        width:60,
        borderRadius:30
    },
    style5:{
        flexDirection:'row',
        alignItems:'center',
        width:devWidth,
        height:devHeight*0.1,
        marginTop:devHeight*0.1*0.1,
        backgroundColor:'white',
        paddingLeft:20
    },
    style6:{
        width:devWidth*0.11,
        height:devHeight*0.06,
        borderRadius:devHeight*0.06*0.5,
        backgroundColor:'#ffcccc',
        marginRight:30,
        alignItems:'center',
        justifyContent:'center'
    },
    style7:{
        backgroundColor:'#f23030',
        width:devWidth*0.5,
        height:devHeight*0.05,
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
        width:devWidth,
        height:devHeight*0.25
    },
    iconStyle:{
        fontSize:devWidth*0.05,
        color:'white'
    },
    textStyle:{
        color:'white',
        fontSize:15
    }
})
