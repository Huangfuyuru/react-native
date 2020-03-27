/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  BackHandler,
  ToastAndroid
} from 'react-native';

import ShowMyName from './components/ShowMyName'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'
// 自定义ImageBackground
import BackGroundImage from './components/BackGroundImage'

//TypeScript RN、angular、Vue3都基于TypeScript
const App= () => {
  // let isExit = false;
  // BackHandler.addEventListener('back',()=>{
  //   ToastAndroid.show('确认要退出吗',2000);
  //   if(isExit){
  //     BackHandler.exitApp();
  //     return false;
  //   }
  //   isExit = true;
  //   setTimeout(()=>{
  //     isExit = false;
  //   },2000)
  //   return true;
  //   // console.log('back');
  //   // ToastAndroid.show('确认退出吗',2000);
  //   // return false;//true表示不退出，默认是false是退出
  //   // BackHandler.exitApp();
  // })
  let isExit = false;
  let now = 0;
  //记得取消监听
  BackHandler.addEventListener('back',()=>{
    console.log(new Date().getTime());
    if(new Date().getTime()-now<2000){
      BackHandler.exitApp();
    }else{
      ToastAndroid.show('确定要退出吗',100);
      now = new Date().getTime();
      return true;
    }
  })
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          {/* <View style={{width:40,height:40}}>
            <Button onPress={()=>{

            }} title="xxx"/>          
          </View>
          <TouchableOpacity style={{width:50,height:50,backgroundColor:'pink'}}>
            <Text>
              xxx1
            </Text>
          </TouchableOpacity> */}
          {/* flex布局 */}
          {/* 
            在rn中，组件 默认设置了flex属性，默认主轴是竖轴,flexDirection:'row'设置主轴是横轴 
            justifyContent 设置主轴的对齐方式
            flexWrap:'wrap' 换行
            alignItems 交叉轴对齐方式
          */}
          {/* <View style={{
            flexDirection:'row'
          }}>
            <View style={{flexDirection:'row'}}>
            <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582176335295&di=d240cd31e6353dbdef604bf4e352ae26&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853'}} style={{width:20,height:20}}/> 
            <TextInput placeholder="请输入"/> 
            </View>
            <View style={styles.Border2}>
              <Text style={{textAlign:'center'}}>+</Text>
            </View>
          </View>
          <View  style={{flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap'}}>
          <View style={styles.box1}>
            <Text>1</Text>
          </View>
          <View style={styles.box1}>
            <Text>1</Text>
          </View>
          <View style={styles.box1}>
            <Text>1</Text>
          </View>
          <View style={styles.box1}>
            <Text>1</Text>
          </View>
          <View style={styles.box1}>
            <Text>1</Text>
          </View>
          <View style={styles.box1}>
            <Text>1</Text>
          </View>
          <View style={styles.box1}>
            <Text>1</Text>
          </View>
          <View style={styles.box1}>
            <Text>1</Text>
          </View>
          </View> */}
          {/* flex布局 */}
        <View style={styles.box}>
          <Text style={[styles.txt,styles.size]}>BLACKPINK IN YOUR AREA</Text>
          {/* <ShowMyName name="皇甫玉茹"/> */}
          {/* <Counter/> */}
          {/* <Counter2/> */}
        </View>
        {/* <View>
          <Text>
            <Text>inner01</Text>
            <Text>inner02</Text>
          </Text>
          <Text>
            <Text>inner01</Text>
            <Text>inner02</Text>
          </Text>
        </View> */}
        {/* <View> */}
          {/* 从本地引入图片，直接显示图片的默认大小 */}
          {/* <Image source={require('./components/img/icon/user.png')}/> */}
          {/* 从网络引入图片，要设置大小,这个大小其实设置的是Image组件的大小，而不是图片的大小
            在使用resizeMode属性来让图片铺满或者是拉伸。。。
          */}
          {/* <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582176335295&di=d240cd31e6353dbdef604bf4e352ae26&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853'}} style={{width:500,height:300}}/> */}
        {/* </View> */}
        <View>
          <BackGroundImage style={{width:'100%',height:600}} source={{uri:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1184182657,3230159245&fm=26&gp=0.jpg'}}>
            {/* <View style={styles.box1}></View> */}
            {/* <Text style={[styles.txt,styles.size]}>welcome</Text> */}
            {/* 受控组件 */}
            
            {/* <TextInput style={styles.inputBorder} onChangeText={(data)=>{setData(data)}}/> */}
            {/* <Text>{data}</Text> */}
          </BackGroundImage>
        </View>
        {/* <View>
          <BackGroundImage style={{width:'100%',height:600}} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582177445190&di=370f3d68a6d249d2c09a5fd5f9c71a08&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D422362611%2C2700604841%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854'}}>
          </BackGroundImage>
        </View> */}
        </ScrollView>
      </SafeAreaView>
      
    </>
  );
};

//在这里声明一些样式，就没有css文件了
const styles = StyleSheet.create({
  inputBorder:{
    borderColor:'white',
    borderWidth:2,
    borderRadius:24,
    height:40
  },
  Border2:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:50,
    height:25,
    width:25
  },
  box:{
    backgroundColor:'black',
  },
  box1:{
    width:100,
    height:100,
    backgroundColor:'yellow',
    marginBottom:10
  },
  txt:{
    color:'pink',
    textAlign:'center'
  },
  size:{
    fontSize:30
  },
  
});
export default App;
