//钉钉搜索栏
import React,{useState} from 'react'
import {Text,View,FlatList,StatusBar} from 'react-native'

const FlatListDemo = () => {
    let data = [];
    let [isFresh,setFresh] = useState(false);
    for(var i=0;i<100;i++){
        data.push({key:i+'',title:i+'abc'})
    }
    let [da,setDa] = useState(data);
    let addData = () => {
        for(var i = 100;i<200;i++){
        data.push({key:i+'',title:i+'abc'})
        }
        setDa(data)
    }
    let upDateData = ()=>{
        setFresh(true);
        setTimeout(()=>{
        setFresh(false);
        },2000)
    }

    return (
      // FlatList 
      // onRefresh是下拉刷新
      // onEndReached当列表被滚动到距离内容最底部不足的距离时调用。
      <FlatList
      data={da}
      onRefresh = {upDateData}
      refreshing = {isFresh}
      onEndReached = {addData}
      renderItem={({item,index})=>{
        return <View><Text>{item.title}</Text></View>
      }}
      />
   
    )
}

export default FlatListDemo;