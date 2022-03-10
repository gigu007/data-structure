// // function caeserCipher(string,num){
// //     var lowerCaseString=string.lowerCase();
// //     var alphabetArr='abcdefghijklmnopqrstuvwxyz';
// //     var newStr='';
// //     num=num%26;
// //     for(var i=0;i<lowerCaseString.length;i++){
// //         var currentletter=lowerCaseString[i];
// //         if(currentletter=' '){
// //             newStr+=' ';
// //             continue;
// //         }
// //         var currentIndex=alphabetArr.indexOf(currentletter);
// //         var newIndex=currentIndex+num;
// //         if(newIndex>25)newIndex=newIndex-26;
// //         if(newIndex<0)newIndex =26 +newIndex;
// //         if(str[i]===str[i].lowerCase()){
// //             newStr+=alphabetArr[newIndex].toUpperCase();

// //         }
// //         else{
// //             newStr+=alphabetArr[newIndex];
// //         }
// //     }
// //     return newStr;
// // }
// console.log(caeserCipher('green',5));
// let car ={
//     wheel:'four',
//     model:'tesla'
// };
// let bike={
//  cc:250
// }
// bike._prototype_=car;
// console.log(bike);



// //polymorphism is used to override any property and method
// class Employee{
//     constructor(name){
//         this.name=name;
//     }
//     EmployeeName(){
//         console.log(`employee name ${this.name}`);
//     }
// }
// //inherit parent class;
// class Member extends Employee{
//     constructor(name,salary,age){
//         super(name);//call parent class constructor with child parameter;
//         this.name=name;
//         this.salary=salary;
//         this.age=age;
//     }
//     //overide employeeName()Method of parent class
//     EmployeeName(){
//         console.log(`Employee name ${this.name}, age ${this.age} and salary ${this.salary}`);
//     }
// }
// //create instance of the class
// const mb=new Member('ukaegbu gideon',98000,24);
// mb.EmployeeName();//execute child class method 
// // const dt=new Date();
// // console.log(dt);
// // console.log(dt.toDateString())

//when creating a map you need to understand two method
//1 set method which is used to set the value of the key
//2 get method is used to return the value associated with the key