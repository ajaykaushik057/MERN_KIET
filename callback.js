// const sum=(num1,num2)=>{
//     return "sum="+(num1+num2);
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// let msg=sum(20,30);
// print(msg);


// const sum=(num1,num2)=>{
//     print("sum="+(num1+num2));
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// sum(20,30);

// const sum=(num1,num2)=>{
//     print("sum="+(num1+num2));
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// sum(20,30);


// call back function
const sum=(num1,num2,print)=>{
    let s=num1+num2;
    print(s);
}

sum(20,30,(sum)=>{
    if(sum>20){
        console.log("Greater than 20");
    }
    else{
        console.log("Less than 20")
    }
})
