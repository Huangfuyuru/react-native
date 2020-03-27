/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
 
} from 'react-native';
import {
  Scene,
  Router,
  Tabs,
  Drawer,
  Lightbox,
  Modal,
  Overlay
}from 'react-native-router-flux'
import {Grid,Icon} from '@ant-design/react-native'
import Doc from './components/Doc'
import Msg from './components/Msg'
import MsgDetail from './components/MsgDetail'
import MyBox from './components/MyBox'
import Login from './components/Login'
import Home from './components/Home'
import MessageBar from './components/MessageBar'
import SwiperJS from './components/SwiperJS'
import Mylist from './components/Mylist'
import LocalPage from './components/LocalPage'
import MyTS from './components/MyTS'
import Demo1 from './tsdemos/Demo1'
import SplashScreen from 'react-native-splash-screen'

//将myApp/android/app/src/main/res下的文件夹图片
//启动画面 react-native-splash-screen
  //如果第一次安装，一般来说都有一个引导页(普通轮播图)，注意本地存储记录下状态
  //看功能，是否需要先登陆，如果需要先登陆，登陆完记录状态(用户信息)
  //再次进入的时候，也要从本地判断是否登陆过

//react native中本地存储是异步的
//使用mork.js进行数据模拟请求
console.disableYellowBox = true;//将warn关闭
const rootUrl = 'https://www.fastmock.site/mock/6cb97f4d73a9370a46077e2d6bdf31f5/api';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    fetch(rootUrl+'/topics?limit=5')
    .then(res=>res.json())
    .then(res=>console.log(JSON.stringify(res)))
  }, [])
  return (
    <Router>
      <Overlay>
      <Modal key='modal' hideNavBar>
        <Lightbox key='lightbox'>
          <Drawer
            key="drawer"
            contentComponent={()=><Text>drawer</Text>}
            drawerIcon={()=><Icon name="menu"/>}
            drawerWidth={400}
          >
            <Scene key="root">
              <Tabs key="tabBar" 
                activeTintColor='pink'
                inactiveTintColor='black'
                hideNavBar
                tabBarStyle={{backgroundColor:'#cc2'}}  
              >
                {/* 消息栏*/}
                <Scene key='home'
                  title="主页"
                  icon={
                    ({focused})=><Icon color={focused?'pink':'black'} name='home'/>
                  }
                >
                  <Scene key='home1' component={Home}/>
                </Scene>
                <Scene key='swiperJS'
                  title="轮播"
                  icon={
                    ({focused})=><Icon color={focused?'pink':'black'} name='tag'/>
                  }
                >
                  <Scene key='swiperJS' component={SwiperJS}/>
                </Scene>
                <Scene key='msg' 
                  initial
                  title='消息'
                  icon={
                    ({focused})=><Icon color={focused?'pink':'black'} name='message'/>
                  }>
                  <Scene key='ms' component={Msg}/>
                  <Scene key='msgdetail' hideTabBar component={MsgDetail}/>
                  <Scene 
                    hideDrawerButton
                  key='mylist' component={Mylist}/>
                  <Scene key='local' title="本地存储" component={LocalPage}/>
                  <Scene key='myts' title="MyTS" component={MyTS}/>
                  <Scene key='demots' title="DemoTS" component={Demo1}/>
                </Scene>
                
                {/* 文档栏 */}
                <Scene key='doc' 
                title='文档'
                hideDrawerButton
                icon={
                  ({focused})=><Icon color={focused?'pink':'black'} name='file'/>
                }>
                  <Scene key='docc' component={Doc}/>
                </Scene>
              </Tabs>
            </Scene>
          </Drawer>
          {/* lightBox和Modal调用，嵌套在lightBox除其他的第一层 */}
          <Scene key='light' title='light弹小' component={MyBox}/>
        </Lightbox>
        <Scene key='login' component={Login}/>
        
      </Modal>
      <Scene key="messageBar" title="messageBar" component={MessageBar}/>
      </Overlay>
    </Router>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
