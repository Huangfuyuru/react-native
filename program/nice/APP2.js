/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Scene,
  Router
}from 'react-native-router-flux'
import Doc from './components/Doc'
import Msg from './components/Msg'
import MsgDetail from './components/MsgDetail'
const App = () => {
  return (
    <Router>
      <Scene key="root">
        {/* 默认显示第一个scene,如果没放在第一个，可以夹initial属性 */}
        <Scene key="msg" title="msg" titleStyle={{flex:1,textAlign:'center'}} component={Msg}/>
        <Scene key="doc" title="doc" 
          titleStyle={{flex:1,textAlign:'center',color:'pink'}} 
          component={Doc}
          renderRightButton={<View></View>}
          />
          <Scene 
          backTitle='back'
          backButtonImage={require('./components/assets/icon/user.png')}
          titleStyle={{flex:1,textAlign:'center',color:'pink'}}
          key="msgdetail" title="消息详情" component={MsgDetail}/>
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
