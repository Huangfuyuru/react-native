import React, { Component } from 'react'
import {Text,View, StatusBar} from 'react-native'

//装饰器其实就是一个函数，在函数里可以写一些新的逻辑，
//包裹后面修饰的内容，将新的逻辑传递到被修饰的内容中去
//高阶组件 --- 其实就是一个函数，就是装饰器
//@expr 语法其实是语法糖
//当他修饰时，直接就会被调用

// function helloWord(target: any) {
//     console.log('hello Word!');
// }

// @helloWord
// class HelloWordClass {
//     sayHello(){

//     }
// }

//target指代的是要修饰的类
//定义
// function addUrl(target:any){
//     target.prototype.url = 'https://';
// }
// //调用
// @addUrl
// class HomeServer{
//     // url:any;
//     url:string|undefined;
//     getData(){
//         console.log(this.url)
//     }
// }
// var home = new HomeServer();
// home.getData();

// //带参数装饰器,用函数返回
// function addUrl2(url:string){
//     return function(target:any){
//         target.prototype.url = url
//     }
// }
// @addUrl2('http://www.baidu.com')
// class UserServer{
//     url:string|undefined;
//     getData(){
//         console.log(this.url)
//     }
// }
// var user = new UserServer();
// user.getData();

// function setStatusBar(color:string){
//     return function(TargetClass:any){
//         return class extends Component{
//             render(){
//                 return (
//                     <>
//                         <View style={{height:30,backgroundColor:color}}></View>
//                         {/* 替换 */}
//                         <TargetClass />   
//                     </>
//                 )
//             }
//         }
//     }
// }


//方法装饰器
// function enumerable(value: boolean) {
//     //参数有三个
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log(descriptor);
//         //target是修饰的类原型对象
//         target.name = 'zh'; //在原型上直接加一个属性
//         console.log(target);
//         console.log(propertyKey);
//         descriptor.enumerable = value;
//     };
// }
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }

//     @enumerable(false)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// var gree = new Greeter('world');
// console.log(gree.name)

// function enumerable(value: boolean) {
//     //参数有三个
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = value;
//     };
// }
// function log(target:any,methodName:string,des:PropertyDescriptor){
//     var oldVal = des.value;
//     des.value = function(){
//         console.log(methodName+'被调用');
//         return oldVal().apply(this,[...arguments]);
//     }
    
// }
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }

//     @enumerable(true)
//     @log
//     greet(msg:string) {
//         return "Hello, " + this.greeting + msg;
//     }
// }

// let msg = new Greeter('world').greet('greet参数');
// console.log(msg);

//属性装饰器

//参数装饰器

// @setStatusBar('pink')
export default class Desc extends Component {
    render() {
        return (
            <View>
                <Text>xxxx!</Text>
            </View>
        )
    }
}
