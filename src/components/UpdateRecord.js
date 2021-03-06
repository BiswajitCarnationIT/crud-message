import React from 'react'
import  { useState, useEffect } from "react";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux'
import { fetchList } from '../redux/ActionCreator';




const UpdateMessge = () => {
    const [id, setId] = useState();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const dispatch = useDispatch()
    //console.log(id.id)
    //console.log(title,message,status)
    const handleSubmit = () => {
        //alert(props.fullName)
        const article = {
           title:title.title,
           message: message.message,
           status:status.status
          
        };
        console.log(article);
        axios
      .put(`http://localhost:3000/users/${id.id}`, article)
      .then((response) => alert("updated please reload"))
      .catch((error) => {
        console.error("There was an error!", error);
      });
        //this.history.push("/")  r-r-d
    
        //*** */
        axios
          .get("http://localhost:3000/users")
          .then((response) => {
            //data = response.data;
            console.log(response.data);
            //props.handleFetchToRedux();
            dispatch(fetchList(response.data))
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
        //history.push("/table");
      };
      const fetchData = () =>{
          axios
        .get(`http://localhost:3000/users`)
        .then((res) => {
          console.log(res.data);
          //data = res.data;
          dispatch(fetchList(res.data))
          
        })
        .catch((err) => {
          console.log(err);
        });
      }
  
    return (
        <div>
            <h3>Add message</h3>
            <input type="text" placeholder='id' name="id" onChange={(e) =>
                setId({ [e.target.name]: e.target.value })
            }/>
            <br></br>
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
            {/* <input type="radio" id="active" name="status" placeholder='status' value=""/>
            <label for="active">Active</label><br></br>
            <input type="radio" id="Inactive" name="status" placeholder='status' value=""/>
            <label for="Inactive">Inactive</label><br></br> */}
            <button type="button" onClick={handleSubmit} >Submit</button>
            <button onClick={fetchData}>Load Message list</button>
            
        </div>
    )
}

export default UpdateMessge
