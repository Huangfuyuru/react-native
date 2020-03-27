import React, { Component } from 'react'
import {View,Text,Dimensions,ScrollView,StyleSheet, Image,FlatList} from 'react-native'
import Button from 'react-native-button'
import { MessageBar, MessageBarManager } from 'react-native-message-bar';
import Swiper from 'react-native-swiper';
import ImagePicker from 'react-native-image-picker';
const {width} = Dimensions.get('window')
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
export default class Home extends Component {
    constructor(){
        super();
        let data = [];
        for(var i=0;i<20;i++){
            data.push({tit:i,key:i})
        }
        this.state={
            data,
            imageUrl:''
        }
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
                imageUrl: source,
              });
            }
          });
    }
    render() {
        return (
            <View>
                <Button onPress={this.takePhoto}>拍照</Button>
                <Image style={{width:200,height:200}} source={this.state.imageUrl}/>
                {/* horizontal设为true，可以横向滑动 */}
                {/* pagingEnabled设为true,一次滑动一页 */}
                {/* 下面这个View是为了让下面的滑动条上来 */}
                <View style={{height:300}}>
                    <ScrollView horizontal={true} pagingEnabled={true} contentContainerStyle={styles.contentContainer}>
                        <View style={styles.slide}><Text>1</Text></View>
                        <View style={styles.slide}><Text>2</Text></View>
                        <View style={styles.slide}><Text>3</Text></View>
                    </ScrollView>
                </View>
                <View style={styles.contentContainer2}>
                    {/* numColumns：实现分栏布局 */}
                    {/* horizontal：实现水平滚动 */}
                    <FlatList
                    ListHeaderComponent={<Button onPress={()=>{MessageBarManager.showAlert({alertType:'info',title:'提示标题',message:'具体信息',stylesheetInfo:{backgroundColor:'green'}})}}style={styles.buttonStyle}>头部</Button>}
                    ListFooterComponent={<View><Text>底部</Text></View>}
                     numColumns={4}
                    data={this.state.data}
                    renderItem={({item})=>{
                        return <View style={styles.slide2}>
                            <Text>{item.tit}</Text>
                        </View>
                    }}
                    />
                </View>
                
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contentContainer:{
        backgroundColor:'pink',
        height:300,
    },
    contentContainer2:{
        height:300,
    },
    slide:{
        width:width,
        borderColor:'blue',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
    },
    slide2:{
        borderColor:'black',
        borderWidth:1,
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f42',
    },
    buttonStyle:{
        width:100,height: 40,
        borderRadius: 20,
        textAlignVertical: 'center',
        // textAlignVertical垂直居中
        backgroundColor:'#583',
        color: '#fff'
    }
})
