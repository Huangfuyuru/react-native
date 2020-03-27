import React, { Component } from 'react'
import {View,Text,TouchableOpacity,FlatList,StyleSheet,ToastAndroid} from 'react-native'
export default class Content extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            count:1
        }
    }
    componentDidMount(){
        fetch(`https://cnodejs.org/api/v1/topics?page=1&limit=15`)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    up=()=>{
        if(this.state.count == 1){
            ToastAndroid.show("这已经是第一页了",ToastAndroid.SHORT)
        }else{
            this.setState({
                count:this.state.count-1
            },()=>{
                fetch(`https://cnodejs.org/api/v1/topics?page=${this.state.count}&limit=15`)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data})
                })
            })
        }
    }
    down=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            fetch(`https://cnodejs.org/api/v1/topics?page=${this.state.count}&limit=15`)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data})
            })
        })
    }
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <View style={{marginTop:20}}>
                <FlatList
                        data={this.state.data}
                        renderItem={({item})=>{
                            if(item.title.length>15){
                                item.title = item.title.slice(0,16)+'...'
                            }
                            item.create_at= item.create_at.slice(0,10);
                            var i = Math.random()*10;
                            var temp,c;
                            if(i>5){
                                temp = "已回复";
                                c = 'black'
                            }else{
                                temp = "待回复";
                                c = 'red'
                            }
                            return <View style={styles.boxStyle}>
                               <Text style={{width:250}}>{item.title}</Text>
                               <Text>{item.create_at}</Text>
                               <Text style={{color:c}}>{temp}</Text>
                            </View>
                        }}
                />
                </View>
                <View style={styles.changeBox}>
                    <TouchableOpacity style={styles.butBox} onPress={this.up}><Text style={{color:'white'}}>上一页</Text></TouchableOpacity>
                    <Text>第{this.state.count}页</Text>
                    <TouchableOpacity style={styles.butBox} onPress={this.down}><Text style={{color:'white'}}>下一页</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxStyle:{
        flexDirection:'row',
        height:25,
        justifyContent:"space-between",
        marginTop:5,
        paddingLeft:10,
        paddingRight:10
    },
    changeBox:{
        flexDirection:'row',
        marginTop:30,
        paddingLeft:10,
        paddingRight:10,
        justifyContent:"space-between"
    },
    butBox:{
        backgroundColor:'red',
        height:26,
        width:100,
        borderRadius:13,
        justifyContent:'center',
        alignItems:'center'
    }
})