const msg=function (){                                     // Anonimus function
    console.log("welcome to function world");
}
msg();

const msg=function message(){                                     // function Expression
    console.log("welcome to function world");
}
msg();

const sum=function (num1,num2){
    let sum=num1+num2;
    console.log("Sum=",sum);
}
sum(23,45);

const mul=function (num1,num2){
  return num1*num2;
}
console.log("mul=",mul(23,6))