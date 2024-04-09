// Spread Operator

const sum=(num1,num2,num3)=>{
    console.log("Sum=",(num1+num2+num3));
}
let value=[50,60,50];
sum(...value);