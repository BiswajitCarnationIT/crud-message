import React from 'react'
import  { useState, useEffect } from "react";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux'
import { fetchList } from '../redux/ActionCreator';




const AddMessage = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const dispatch = useDispatch()
    const handleSubmit = () => {
        const article = {
           title:title.title,
           message: message.message,
           status:status.status
          
        };
        console.log(article);
        axios
          .post("http://localhost:3000/users", article)
          .then(() => {
            alert("Submitted");
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
    
        axios
          .get("http://localhost:3000/users")
          .then((response) => {
            console.log(response.data);
            dispatch(fetchList(response.data))
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      };
      const fetchData = () =>{
          axios
        .get(`http://localhost:3000/users`)
        .then((res) => {
          console.log(res.data);
          dispatch(fetchList(res.data))
          
        })
        .catch((err) => {
          console.log(err);
        });
      }
  
    return (
        <div>
            <h3>Add message</h3>
            <input type="text" placeholder='Title' name="title" onChange={(e) =>
                setTitle({ [e.target.name]: e.target.value })
            }/>
            <br></br>
            <input type="text" placeholder='Message' name = "message" onChange={(e) =>
                setMessage({ [e.target.name]: e.target.value })
            }/>
            <br></br>
            <input type="text" placeholder='Status' name = "status" onChange={(e) =>
                setStatus({ [e.target.name]: e.target.value })
            }/>
            <br></br>
          
            <button type="button" onClick={handleSubmit} >Submit</button>
            <button onClick={fetchData}>Load Message list</button>
            
        </div>
    )
}

export default AddMessage
