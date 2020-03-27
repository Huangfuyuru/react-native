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
  FlatList,
  BackHandler,
  ToastAndroid
} from 'react-native';
// import {Router,Scene} from 'react-native-router-flux'
import DingHead from './components/DingHead'
import FlatListDemo from './components/FlatListDemo'
// import Doc from './components/Doc'
// import Msg from './components/Msg'
//入口
const App= () => {
  //两秒内点击两次可以退出
  let isExit = false;
  let now = 0;
  BackHandler.addEventListener('back',()=>{
    // 方式一
    // if(isExit){
    //   BackHandler.exitApp();
    //   return false;
    // }
    // ToastAndroid.show("确认要退出吗",100);
    // isExit = true;
    // setTimeout(()=>{
    //   isExit=false
    // },1000)
    // return true;

    //方式二
    if(new Date().getTime()-now<1000){
      BackHandler.exitApp();
    }else{
      ToastAndroid.show("要退出吗",100);
      now = new Date().getTime();
      return true;
    }
  })
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
        {/* 钉钉头部搜索框 */}
        {/* <DingHead/> */}
        </ScrollView>
        {/* FlatList */}
        {/* <FlatListDemo/> */}
      </SafeAreaView>
      
    </>
    // <Router>
    //   <Scene key="root">
    //     <Scene key="msg" title="标题" component={Msg}/>
    //     <Scene key="doc" component={Doc}/>
    //   </Scene>
    // </Router>
  );
};

//在这里声明一些样式，就没有css文件了
const styles = StyleSheet.create({

})
export default App;
