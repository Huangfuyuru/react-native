import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,TextInput, ScrollView, FlatList} from 'react-native'
import {Icon} from '@ant-design/react-native'
export default class Jia extends Component {
    constructor(){
        super();
        this.state={
            lists:[
                {name:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
                 pirce:36.00,
                 imgsrc:require('./img/shang.png')
                },
                {name:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
                 pirce:36.00,
                 imgsrc:require('./img/le.png')
                },
                {name:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
                 pirce:36.00,
                 imgsrc:require('./img/shang.png')
                },
                {name:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
                 pirce:36.00,
                 imgsrc:require('./img/le.png')
                },
                {name:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
                 pirce:36.00,
                 imgsrc:require('./img/shang.png')
                },
                {name:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
                 pirce:36.00,
                 imgsrc:require('./img/le.png')
                }
              ]
        }
    }
    render() {
        return (
            <View>
                <View backgroundColor={{backgroundColor:'#f4f4f4',flex:1}}>

                    <View style={styles.search}>
                        <View style={styles.searchC}>
                        <TextInput style={{width:'90%'}}placeholder="请输入商品名称"/>
                        <Icon name="search"/>
                        </View>
                    </View>

                    <View>
                        <View style={styles.lie}>
                        <Text style={{color:'red'}}>综合</Text>
                        <Text>销量</Text>
                        <Text>新品</Text>
                        <Text>价格</Text>
                        <Text>信用</Text>
                        </View>
                    </View>
                    {/* <View style={styles.goods}> */}
                    <FlatList style={styles.goods}
                      data = {this.state.lists}
                      numColumns={2}
                      renderItem={(item)=>{
                        item = item.item
                        return <View style={styles.goodsChild}>
                          <Image style={{width:150,height:150}} source={item.imgsrc}/>
                          <Text>{item.name}</Text>
                          <Text style={{color:'red'}}>{item.pirce}</Text>
                         </View>
                      }}
                    />
                    {/* </View> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    search:{
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:1,
      height:45
    },
    searchC:{
      flexDirection:'row',
      backgroundColor:'#f4f4f4',
      marginBottom:5,
      justifyContent:'flex-start',
      alignItems:'center',
      width:'80%',
      height:'70%'
    },
    lie:{
      flexDirection:'row',
      justifyContent:'space-around',
      backgroundColor:'white',
      height:45,
      alignItems:'center'
    },
    goods:{
      height:750
    },
    goodsChild:{
      justifyContent:'center',
      alignItems:'center',
      width:225,
      height:270,
      backgroundColor:'white',
      marginTop:10,
      padding:10,
      marginLeft:8
    }
  });