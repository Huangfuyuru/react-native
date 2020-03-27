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
  Image,
} from 'react-native';
import {
  Scene,
  Router,
  Tabs,
  Drawer
}from 'react-native-router-flux'
import {Grid,Icon} from '@ant-design/react-native'
import Doc from './components/Doc'
import Msg from './components/Msg'
import MsgDetail from './components/MsgDetail'
const App = () => {
  return (
    <Router>
      <Drawer
        key="drawer"
        contentComponent={()=><Text>drawer</Text>}
        drawerIcon={()=><Icon name="menu"/>}
        drawerWidth={400}
      >
        <Scene key="root">
          <Tabs key="tabBar" 
            activeTintColor='pink'
            inactiveTintColor='blue'
            hideNavBar
            tabBarStyle={{backgroundColor:'#cc2'}}  
          >
            {/* 消息栏*/}
            <Scene key='msg' 
              title='消息'
              icon={
                ({focused})=><Icon color={focused?'red':'blue'} name='msgg'/>
              }>
              <Scene key='ms' component={Msg}/>
              <Scene key='msgdetail' hideTabBar component={MsgDetail}/>
            </Scene>
            {/* 文档栏 */}
            <Scene key='doc' 
            title='文档'
            icon={
              ({focused})=><Icon color={focused?'red':'blue'} name='file'/>
            }>
              <Scene key='docc' component={Doc}/>
            </Scene>
          </Tabs>
        </Scene>
      </Drawer>
    </Router>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
