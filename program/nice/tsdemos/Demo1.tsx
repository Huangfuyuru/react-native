import React, { Component } from 'react'
import {Text,View} from 'react-native'
import ListItem from './ListItem'
import Desc from './Desc'
//类型断言：可以确定地指定一个值的类型
//形式
//<Type>值 在jsx不能用
//值 as 类型

// interface Person{
//     name:string;
//     age:number;
// }
// //let user1:Person = {name:'zhangsan',age:20}
// let user1={} as Person;
// user1.name = 'liu';
// user1.age = 18;

//联合类型 或者 any类型
// function getLength(p1:string|number):number{
//     return (p1 as string).length;
// }

//类定义
//es5 
//创建一个Person类，有name和age属性，调用的时候传入
// function Person(name:string,age:number){
//     this.name = name;
//     this.age = age;
// }
//es6
// class Person{
//     name:string;
//     age:number;
//     protected love:string;
//     constructor(name:string,age:number,love:string){
//         this.name = name;
//         this.age = age;
//         this.love = love;
//     }
//     sayName(){
//         console.log(this.name,this.age)
//     }
// }
// class Worker extends Person{
//     job:string;
//     private home:string;
//     static sex:string = '女';
    
//     constructor(name:string,age:number,job:string,home:string,love:string){
//         super(name,age,love);
//         this.job = job;
//         this.home = home;
//     }
// }
// let user = new Person('zang',18,'sing');
// user.sayName();
// let worker1 = new Worker('wang',23,'程序员','张家口','football');
// console.log(worker1)
// console.log(Worker.sex)

//泛型
// function identity<T>(arg:T):T{
//     return arg;
// }
// console.log(identity<string>('blackpink'));
// console.log(identity<number>(14));

// function getMsg<U>(msg:U):Array<U>{
//     return [msg];
// }
// console.log(getMsg<string>('okk'))

//泛型接口函数
// interface Generic<T>{
//     (arg:T):T;
// }
// let myGeneric:Generic<number> = function(arg){
//     return arg;
// }
// console.log(myGeneric(10000));
//泛型类
// class AddData<T>{
//     list:T[] = [];
//     num:number;
//     constructor(num:number){
//         this.num = num;
//     }
//     add(data:T):T[]{
//         this.list.push(data);
//         return this.list;
//     }
// }
// let data1 = new AddData<number>(40);
// console.log(data1.add(40));

interface Props{
    name:string;
    data:{
        id:string,
        title:string
    }
}
interface State{
    tit:string
}

export default class Demo1 extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state = {
            tit:'100'
        }
    }
    render() {
        var obj = {
            name:'zhang',
            data:{
                id:'123',
                title:'lili'
            }
        }
        return (
            <View>
                <ListItem />
                <Desc/>
            </View>
        )
    }
}
