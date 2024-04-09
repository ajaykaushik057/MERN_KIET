// Rest parameter
const sum=(num1=0,num2=0,...numbers)=>{
    let s=0;
    if(numbers.length>0){
        
        s=numbers.reduce((a,b)=>a+b)
    }
    console.log("sum of numbers=",(num1+num2+s));
}
sum(12,34,56,67,7,78);
sum();
