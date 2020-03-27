import React, { Component } from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native'
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
export default class SwiperPage extends Component {
    start = async ()=> {
        await AsyncStorage.setItem('isInstall','true');
        this.props.afterInstall();
    }
    render() {
        return (
            <View style={styles.wrapper}>
            <Swiper>
                <View style={styles.slide1}>
                    <Image style={styles.image} source={require('../../assets/s1.jpg')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.image} source={require('../../assets/s2.jpg')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.image} source={require('../../assets/s3.jpg')}/>
                    <TouchableOpacity style={styles.start} onPress={this.start}>
                        <Text>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    slide1:{
        justifyContent:'center',
        alignItems:'center'
    },
    start:{
        position:'absolute',
        bottom:50,
        width:120,
        height:30,
        backgroundColor:'pink',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        fontSize:35
    },
    image:{
        height:810,
    }
})
