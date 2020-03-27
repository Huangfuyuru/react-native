//钉钉搜索栏
import React,{Component} from 'react'
import {Text,View,StyleSheet, TouchableOpacity,Image, TextInput,AsyncStorage} from 'react-native'
import {Grid,Icon} from '@ant-design/react-native'
import {Actions} from 'react-native-router-flux'
import {myFetch} from '../utils/index'

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
            console.log(u.username,u.pwd)
            if(this.state.username === u.username && this.state.pwd === u.pwd){
                await AsyncStorage.setItem('user',JSON.stringify(u))
                Actions.lightbox()
            }else{
                this.setState({isloading:false,isOK:true})
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
                    width:'80%',
                    backgroundColor:'#ccc',
                    borderRadius:20,
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:20,
                    marginRight:10,
                    marginBottom:20
                }}>
                    <Icon name="user" color="blue"/>
                    <TextInput placeholder="用户名"
                    onChangeText={this.userhandle}
                    />
                </View>
                <View style={{
                    width:'80%',
                    backgroundColor:'#ccc',
                    borderRadius:20,
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:20,
                    marginRight:10,
                    marginBottom:20
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
                    width:200,
                    height:35,
                    borderWidth:1,
                    borderColor:'#ccc',
                    borderRadius:22,
                    justifyContent:'center',
                    alignItems:'center'
                }} onPress={this.login}>
                    <Text style={{
                        color:'#000',
                        fontSize:20
                    }}>登陆</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width:30,
                    height:20,
                    borderWidth:1,
                    marginLeft:50,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:3
                }}
                onPress={this.signUp}>
                    <Text style={{
                        color:'red'
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
