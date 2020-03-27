import React, { Component } from 'react'
import {View,Text,ActivityIndicator, FlatList} from 'react-native'
export default class Mylist extends Component {
    constructor(){
        super();
        this.state={
            list:[1,2,3,4,5,6,7,8],
            isLoad:false
        }
        
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoad:true
            })
        },1000)
    }
    render() {
        // if(this.state.isLoad){
        //     return (
        //         <View>
        //             <Text>mylist</Text>
        //             <View>
        //             {this.state.list.map((item)=>(
        //                 <Text>{item}</Text>
        //             ))}    
        //             </View>
        //         </View>
        //     )
        // }else{
        //     return (
        //         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        //             <ActivityIndicator color='black' size='small'/>
        //         </View>
        //     )
        // }
    return <View>
        {
            this.state.isLoad?(
                this.state.list.map((item)=>(
                    <View>
                        <Text>{item}</Text>
                    </View>
                ))
            ):(
                <View>
                    <ActivityIndicator color='black' size="small"/>
                </View>
            )
        }
        </View>
    }
}
