'use strict';
var names = [
    'andrey',
    'vlad',
    'jen'
];
//
//names.forEach((name)=>{
//    console.log('foreach',name);
//});

//var returnMe = (name) => name + '!';
//console.log(returnMe('blala'));


//var person = {
//    name:'andrew',
//    greet:function(){
//        names.forEach((name)=>{
//            console.log(this.name + ' hi to + ' + name);
//        });
//    }
//};
//
//person.greet();


function add(a,b){
    return a + b;
}

var addS = (a,b)=>{
    return a + b;
};

var addE = (a,b)=> a + b;

console.log(add(1,4));
console.log(add(9,0));