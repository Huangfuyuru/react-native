import React,{useState} from 'react'
import { View, Button ,Text} from "react-native"

//函数组件
const Counter2 = () => {
    let [num,setNum] = useState(0);
    return (
        <View>
            <Text>{num}</Text>
            <Button onPress={()=>{setNum(num+1)}} title="+1"></Button>
        </View>
    )
}

export default Counter2;