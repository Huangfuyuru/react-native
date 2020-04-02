/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  AsyncStorage,
  BackHandler,
  ToastAndroid,
  Dimensions
} from 'react-native';
import {Icon, Modal} from '@ant-design/react-native'
import {Router,Scene,Tabs, Lightbox, Actions} from 'react-native-router-flux'
const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;
import Good from './components/Good'
import Home from './components/Home'
import ShoppingCar from './components/ShoppingCar'
import Personal from './components/Personal'
import Content from './components/Content'
import Login from './components/common/Login'
import SplashScreen from 'react-native-splash-screen'
import SwiperPage from './components/common/SwiperPage'
import SignUp from './components/common/SignUp'
console.disableYellowBox = true
const App = () => {
  let now = 0;
  let now2 = 0;
  let [isInstall,setIsInstall] = useState(true);
  let [isLogin,setLogin] = useState(false);

  let init = async ()=> {
    let i = await AsyncStorage.getItem('isInstall')
    if(i){
      setIsInstall(false)
    }
    let q = await AsyncStorage.getItem('user');
    if(q){
      let user = JSON.parse(q);
      console.log(user,user.token)
      if(!user){
        console.log('没有登陆');
        SplashScreen.hide();
      }
      if(user){
        console.log('xx');

        SplashScreen.hide();
        setLogin(true);
        
      }
    }else{
      SplashScreen.hide()
    }
    
  }
  useEffect(() => {
    console.log('初始化')
    //AsyncStorage.clear() //清理内存
    init();
  }, [])
  //子组件向父组件传，通过函数
  let start = () =>{
    setIsInstall(false)
  }
  if(isInstall){
    return (
      <SwiperPage afterInstall={start}/>
    )
  }


  return (
   
    <Router
      backAndroidHandler={()=>{
        if(Actions.currentScene != 'homeC' && Actions.currentScene!='login'){
          console.log('不是homeC')
          Actions.pop();
          return true;
        }else{
          console.log('是homeC')
          if(new Date().getTime() - now <2000){
            BackHandler.exitApp()
          }else{
            ToastAndroid.show('确定退出吗',100);
            now = new Date().getTime();
            return true
          }
        }
      }
    }
    >
      <Modal hideNavBar>
      <Lightbox key="lightbox">
        <Scene key="root">
          <Tabs key="tabs"
          activeTintColor="red"
          inactiveTintColor="black"
          hideNavBar
          >
            <Scene key="home"
            hideNavBar
            title="首页"
            icon={({focused})=><Icon color={focused?'red':'black'} name="home"/>}
            >
              
              <Scene key="homeC" component={Home}/>
            </Scene>
            <Scene key="good"
              hideNavBar
              title="商品分类"
              icon={({focused})=><Icon color={focused?'red':'black'} name="slack"/>}
            >
              <Scene key="goodC" component={Good}/>
            </Scene>
            <Scene key="shoppingCar"
              hideNavBar
              title="购物车"
              icon={({focused})=><Icon color={focused?'red':'black'} name="shopping-cart"/>}
            >
              <Scene key="shoppingCarC" component={ShoppingCar}/>
            </Scene>
            <Scene key="personal"
              title="个人中心"
              icon={({focused})=><Icon color={focused?'red':'black'} name="user-add"/>}
            >
              <Scene hideNavBar key="personalC" component={Personal}/>
              <Scene hideTabBar
              navigationBarStyle={{backgroundColor:'red'}} 
              navBarButtonColor="white" 
              key="content" 
              component={Content}
              renderRightButton={()=><Icon name="ellipsis" color="white" style={{fontSize:30,marginRight:25}}/>}
              renderTitle={()=><View style={{width:devWidth*0.5,marginLeft:140}}><Text style={{fontSize:20,color:'white'}}>我的发布</Text></View>}
              />
            </Scene>
          </Tabs>
        </Scene>
      </Lightbox>
      <Scene initial={!isLogin} key="login" component={Login} />
      <Scene key="signUp" component={SignUp}/>
      </Modal>
    </Router>
  );

};



export default App;
