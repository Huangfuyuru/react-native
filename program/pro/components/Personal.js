import React, { Component } from 'react'
import {View,Text,AsyncStorage, Image,StyleSheet, FlatList,Dimensions,StatusBar,TouchableOpacity} from 'react-native'
import {Icon, Button} from '@ant-design/react-native'
const {width} = Dimensions.get('window')
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux'
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
export default class Personal extends Component {
    constructor(){
        super();
        this.state={
            list1:[
                {iconN:'setting',title:'账号管理'},
                {iconN:'environment',title:'收获地址'},
                {iconN:'solution',title:'我的信息'},
                {iconN:'exception',title:'我的订单'},
                {iconN:'qrcode',title:'我的二维码'},
                {iconN:'pay-circle',title:'我的积分'},
                {iconN:'star',title:'我的收藏'},
            ],
            list2:[
                {iconN:'filter',title:'维修保养'},
                {iconN:'phone',title:'出行接送'},
                {iconN:'smile',title:'我的受赠人'},
                {iconN:'tags',title:'我的住宿优惠'},
                {iconN:'share-alt',title:'我的活动'},
                {iconN:'edit',title:'我的发布'}
            ],
            imgurl:''
        }
    }
    componentWillMount(){
        AsyncStorage.getItem('imgurl').then((res)=>{
            this.setState({imgurl:JSON.parse(res)});
            console.log("获取成功");
            console.log("n",JSON.parse(res));
        })
    }
    takePhoto = () =>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                
              const source = { uri: response.uri };
              this.setState({
                imgurl: source,
              },()=>{
                var m = JSON.stringify(source);
                AsyncStorage.setItem('imgurl',m,()=>{
                    console.log("保存成功");
                    console.log('m',m);
                })
              });
              
            }
          });
    }
    exitG = async () =>{
        await AsyncStorage.removeItem('user');
        Actions.login()
    }
    render() {
        return (
            <View style={styles.all}>
                <View style={styles.s1}>
                    <TouchableOpacity onPress={this.takePhoto}>
                        <Image source={this.state.imgurl} style={styles.imgStyle}/>
                    </TouchableOpacity>
                    <Text style={styles.s1Font}>BINNU DHILLON</Text>
                </View>

                <View style={styles.s3}>
                    <View style={styles.s2}>
                        <Icon name="user"/>
                        <Text style={styles.fontStyle}>我的个人中心</Text>
                    </View>
                    <View>
                        <FlatList
                        data={this.state.list1}
                        numColumns={3}
                        renderItem={({item})=>{
                            return <View style={styles.s4}>
                                <Icon name={item.iconN}/>
                                <Text style={styles.fontStyle}>{item.title}</Text>
                            </View>
                        }}
                        />
                    </View>
                </View>
                
                <View style={styles.s3}>
                    <View style={styles.s2}>
                        <Icon name="tag"/>
                        <Text style={styles.fontStyle}>E族活动</Text>
                    </View>
                    <View>
                        <FlatList
                        data={this.state.list2}
                        numColumns={3}
                        renderItem={({item,index})=>{
                            return <TouchableOpacity style={styles.s4} onPress={Actions.content}>
                                <Icon name={item.iconN}/>
                                <Text style={styles.fontStyle}>{item.title}</Text>
                            </TouchableOpacity>
                        }}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.exit} onPress={this.exitG}>
                    <Text style={{color:'white'}}>退出登陆</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    exit:{
        height:30,
        width:130,
        borderRadius:15,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:175
    },
    all:{
        backgroundColor:'#f0f0f0',
        flex:1,
    },
    s1:{
        backgroundColor:'#f23030',
        justifyContent:'center',
        alignItems:'center',
        height:250
    },
    s2:{
        flexDirection:'row',
        borderBottomColor:'#f0f0f0',
        borderBottomWidth:1,
        height:40,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:10
    },
    s3:{
        marginBottom:8,
        backgroundColor:'white',
    },
    s4:{
        width:width*0.33,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    s1Font:{
        color:'white',
        fontSize:17
    },
    imgStyle:{
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:1,
        borderColor:'white'
    },
    fontStyle:{
        color:'#4f4e4e'
    }
})