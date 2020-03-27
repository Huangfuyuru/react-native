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
            isloading:false
        }
    }
    login=()=>{
        this.setState({isloading:true})
        myFetch.post('/signup',{
            username:this.state.username,
            pwd:this.state.pwd
        }).then(res=>{
            console.log(res.data);
            AsyncStorage.setItem('user2',JSON.stringify(res.data))
            .then(()=>{
                Actions.login()
            })
        })
    }
    userhandle=(text)=>{
        this.setState({username:text})
    }
    passhandle=(text)=>{
        this.setState({pwd:text})
    }
    goLogin = () =>{
        Actions.login()
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
                    }}>注册</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width:60,
                    height:20,
                    borderWidth:1,
                    marginLeft:50,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:3
                }}
                onPress={this.goLogin}>
                    <Text style={{
                        color:'red'
                    }}>返回登陆</Text>
                </TouchableOpacity>
                </View>
                
                {
                    this.state.isloading?<View><Text>注册成功</Text></View>:null
                }
            </View>
        )
    }
}
