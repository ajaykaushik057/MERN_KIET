// import React from 'react'

// function Pratice() {
//    let  name="Dheeraj Jadaun"
//    let age=24
//   return (
//     <div>
//       <h1>Hello {name} and your age is {age}</h1>
//     </div>
//   )
// }

import React from 'react'

function Pratice() {
    let arr=["ajay","dheeraj",'harsh','harsh_y','rashi']
  return (
    <div>
       <h1>MCA Students</h1>
       <ul>
        {arr.map((student,index)=>(
        <li key={index}>{student}</li>
        ))}
       </ul>
    </div>
  )
}

export default Pratice








