const data=[10,20,30,40];
let [x,y,z,w]=data;
console.log(x,y,z,w);

const studentinfo={
    name:"ajay",
    course:"MCA",
    roll_no:"1"
}
let {name,course,roll_no}=studentinfo;
console.log(name,course,roll_no);

let {name:sname,course:mycourse,roll_no:rno}=studentinfo;
console.log(sname,mycourse,rno);