import axios from 'axios'
import { React,useState } from 'react'
const Add = () => {
    let [data,setData]=useState({"_id":"","name":"","phno":"","gen":"","sub1":"","sub2":"","sub3":"","sub4":""})
    let [status,setStatus]=useState("")
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        
    }
    let add=()=>{
        axios.post("http://localhost:5000/add",data).then((res)=>{
            setStatus(res.data.msg)
            if(res.data.msg!=="error in adding record"){
                setData({"_id":"","name":"","phno":"","gen":"","sub1":"","sub2":"","sub3":"","sub4":""})
            }
        })

    }
  return (
    <div className='add'>
    <div className='sig'>
      <div>{status}</div>
      <h2>Enter Details</h2>
      <label for="ID"><b>ID</b></label><br/>
      <input type='text' name='_id'  placeholder=" Enter Id"onChange={fun} value={data._id}/><br/>
      <label for="name"><b>Name</b></label><br/>
       <input type='text' name='name' placeholder="Enter name"onChange={fun} value={data.name}/><br/>
       <label for="phno"><b>Phone No</b></label><br/>
      <input type='text' name='phno' placeholder='Enter phno' onChange={fun} value={data.phno}/><br/>
      <label for="gender"><b>Gender</b></label><br/>
      <input type='radio' name='gen' onChange={fun}  checked={data.gen=='male'} value="male"/>Male<br/>
      <input type='radio' name='gen' onChange={fun}  checked={data.gen=='female'} value="female"/>Female<br/>
      <label for="sub1"><b>Subject-1</b></label><br/>
      <input type='text' name='sub1' placeholder='Sub1 marks' onChange={fun} value={data.sub1}/><br/>
      <label for="sub2"><b>Subject-2</b></label><br/>
      <input type='text' name='sub2' placeholder='Sub2 marks' onChange={fun} value={data.sub2}/><br/>
      <label for="sub3"><b>Subject-3</b></label><br/>
       <input type='text' name='sub3' placeholder='Sub3 marks' onChange={fun} value={data.sub3}/><br/>
       <label for="sub4"><b>Subject-4</b></label><br/>
      <input type='text' name='sub4' placeholder='Sub4 marks' onChange={fun} value={data.sub4}/><br/>
      <button onClick={add}>Add</button>
    </div>
    </div>
  )
}

export default Add
