const msg=()=>console.log("Arrow Function");
let data=[10,20,30.7,"40",50,msg];
console.log(data);
data[5]();
for(let i=0;i<data.length;i++){
    console.log(`value of ${i} is ${data[i]}`);
}

for(let i in data){
    console.log(`value of ${i} is ${data[i]}`);
}

for(let value of data ){
    console.log(`value of array=${value}`);
}

for each
data.forEach(value=>console.log(`value of array=${value}`));