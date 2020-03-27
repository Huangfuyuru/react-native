import React, { Component } from 'react'
import {Text,View} from 'react-native'

//常量
const str = 'abc'
//变量
let num:number = 100;
//数组
let arr:Array<String> = ['1','hello'];
let arr1:string[] = ['aaa','bb','ccc'];
let brr:Array<Number> = [1,2,3,4];
//对象
let obj2:object={name:'zhangsan',age:14};
let obj1:{name:string} = {name:'zhangsan'};//声明的时候限定属性
let tupleArr:[string,number,boolean] = ['ss',2,true];//数组中每个元素都指定类型
//枚举
enum Lev{one,two=200,three};//声明一个枚举数组,默认从0开始往后排
let myLev:Lev = Lev.two;//定义我的枚举
//任意类型
let a:any = 'ss';

//属性接口 interface ：描述一个对象的取值规范,不实现具体的对象.
interface Person{
    name:string,
    age:number
}
let tom:Person = {
    name:'Tom',
    age:20
}

interface Course{
    title:string,
    intro:string,
    num?:number,
    [propName:string]:any//不确定
}

let hybird:Course={
    title:'hybird',
    intro:'混和应用开发',
    teacher:'冠军'
}

//函数接口
interface MyFunc{
    (params1:string):boolean //规定参数类型和返回值类型
}
//用接口进行函数声明
let fun:MyFunc = function(pa:string){
    return true;
}
//普通函数声明
function fun1(pa1:string,pa2:number):boolean{
    return true;
}
fun1('12',3);

//extends后跟的是要继承的类，implements后跟的是要实现的接口
// 举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，
//我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，
//就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它
interface Alarm{
    alert():void
}
class Door{

}
class SecurityDoor extends Door implements Alarm{
    alert(){
        console.log('SecurityDoor alert')
    }
}
class Car implements Alarm{
    alert(){
        console.log('Car alert')
    }
}
export default class MyTS extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <Text style={{fontSize:20,color:'pink'}}>{arr1}</Text>
                <Text style={{fontSize:20,color:'orange'}}>{obj1.name}</Text>
                <Text style={{fontSize:20,color:'blue'}}>{myLev}</Text>
                <Text style={{fontSize:20,color:'yellow'}}>{tom.name}</Text>
                <Text style={{fontSize:20,color:'pink'}}>{hybird.teacher}</Text>
            </View>
        )
    }
}
