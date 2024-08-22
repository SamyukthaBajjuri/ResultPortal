// Home.js
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
const Home = () => {
        let [data, setData] = useState([])
        let [f, setf] = useState(true)
        useEffect(() => {
            axios.get("http://localhost:5000/getdata").then((res) => {
                setData(res.data)
            })

        }, [f])
        let del=(hno) => {
            axios.delete(`http://localhost:5000/del/${hno}`).then((res) => {
                setf((f) => !f)

            })
        }
        return (<div className='tb'>
        <div className='tab'>
            <table border={1}>
            <tr>
            <th> Hno </th> 
            <th> Name </th> 
            <th> Phno </th> 
            <th> Gender </th> 
            <th> Sub1 </th>
             <th> Sub2 </th>
              <th> Sub3 </th> 
              <th> Sub4 </th>
               <th> Total </th>
               <th>Action</th>
                </tr> {
                data.map((item) => {
                        return ( <tr>
                            <td> {item._id} </td> 
                            <td> {item.name} </td> 
                           <td> {item.phno} </td> 
                            <td> {item.gen} </td> 
                            <td> {item.sub1} </td> 
                            <td> {item.sub2} </td> 
                            <td> {item.sub3} </td> 
                            <td> {item.sub4} </td> 
                            <td> {item.sub1 + item.sub2 + item.sub3 + item.sub4} </td> 
                            <td> <button onClick = {() => del(item._id) }> delete </button></td>
                            </tr>)
                        })
                }

                </table>
                 </div>
                 </div>
            )
        }
export default Home