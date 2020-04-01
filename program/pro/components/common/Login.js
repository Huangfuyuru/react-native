//钉钉搜索栏
import React,{Component} from 'react'
import {Text,View,StyleSheet, TouchableOpacity,Image, TextInput,AsyncStorage,Dimensions} from 'react-native'
import {Grid,Icon} from '@ant-design/react-native'
import {Actions} from 'react-native-router-flux'
import {myFetch} from '../utils/index'
const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;
export default class Login extends Component{
    constructor(){
        super();
        this.state={
            username:'xxx',
            pwd:'',
            isloading:false,
            isOK:false
        }
    }
    login=async ()=>{
        this.setState({isloading:true})
        let u = await AsyncStorage.getItem('user2')
        if(u){
            u = JSON.parse(u);
            for(var i=0;i<u.length;i++){
                if(this.state.username === u[i].username && this.state.pwd === u[i].pwd){
                    await AsyncStorage.setItem('user',JSON.stringify(u[i]));
                    break;
                    
                }
            } 
            if(i === u.length){
                this.setState({isloading:false,isOK:true})
            }else{
                Actions.lightbox()
            }
        }else{
            this.setState({isloading:false,isOK:true})
        }
    }
    userhandle=(text)=>{
        this.setState({username:text})
    }
    passhandle=(text)=>{
        this.setState({pwd:text})
    }
    signUp = () =>{
        Actions.signUp()
    }
    render(){
        return (
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                flex:1
            }}>
                <View style={{
                    width:devWidth*0.8,
                    backgroundColor:'#ccc',
                    height:devHeight*0.06,
                    borderRadius:devHeight*0.06*0.5,
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:devWidth*0.02,
                    marginBottom:devHeight*0.02
                }}>
                    <Icon name="user" color="blue"/>
                    <TextInput placeholder="用户名"
                    onChangeText={this.userhandle}
                    />
                </View>
                <View style={{
                    width:devWidth*0.8,
                    backgroundColor:'#ccc',
                    height:devHeight*0.06,
                    borderRadius:devHeight*0.06*0.5,
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:devWidth*0.02,
                    marginBottom:devHeight*0.02
                }}>
                    <Icon name="home" color="blue"/>
                    <TextInput 
                     secureTextEntry={true}
                    placeholder="密码" onChangeText={this.passhandle}/>
                </View>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                <TouchableOpacity style={{
                    width:devWidth*0.5,
                    height:devHeight*0.04,
                    borderWidth:1,
                    borderColor:'#ccc',
                    borderRadius:devHeight*0.04*0.5,
                    justifyContent:'center',
                    alignItems:'center'
                }} onPress={this.login}>
                    <Text style={{
                        color:'#000',
                        fontSize:devWidth*0.04
                    }}>登陆</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width:devWidth*0.1,
                    height:devHeight*0.03,
                    borderWidth:1,
                    marginLeft:devWidth*0.05,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:devHeight*0.03*0.1
                }}
                onPress={this.signUp}>
                    <Text style={{
                        color:'red',
                        fontSize:devWidth*0.03
                    }}>注册</Text>
                </TouchableOpacity>
                </View>
                {
                    this.state.isloading?<View style={{marginLeft:-85}}><Text>正在登陆中</Text></View>:null
                }
                {
                    this.state.isOK?<View style={{marginLeft:-75}}><Text>用户名或密码不正确</Text></View>:null
                }
            </View>
        )
    }
}
