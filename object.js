let studentInfo={
    rollno:1,
    name:"Ajay",
    course:"Mca",
    college:"Kiet",
    marks:[10,34,42,46],
    music:()=>console.log("Play music"),
}
console.log(studentInfo);
console.log(studentInfo.name);
console.log(studentInfo.music());

let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item.name));