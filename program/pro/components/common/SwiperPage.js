import React, { Component } from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity,AsyncStorage,Dimensions} from 'react-native'
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;
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
                        <Text style={{fontSize:devWidth*0.04}}>开始体验</Text>
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
        bottom:devWidth*0.1,
        width:devWidth*0.3,
        height:devHeight*0.05,
        backgroundColor:'pink',
        borderRadius:devWidth*0.01,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        height:devHeight,
    }
})
