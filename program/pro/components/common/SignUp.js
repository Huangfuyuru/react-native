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
                    }}>注册</Text>
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
                onPress={this.goLogin}>
                    <Text style={{
                        color:'red',
                        fontSize:devWidth*0.03
                    }}>返回</Text>
                </TouchableOpacity>
                </View>
                
                {
                    this.state.isloading?<View><Text>注册成功</Text></View>:null
                }
            </View>
        )
    }
}
