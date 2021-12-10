import React, { useState } from "react";
import axios from "axios";


const DeleteRecord = () => {
  const [id, setId] = useState(0);
  console.log(id)
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/users/${id}`).then(() => {
      console.log("deleted");
      alert("deleted");
    });
  };
  return (
    <div>
      <div className="delete">
        <p>Delete record</p>
        <input
          name="id"
          type="text"
          placeholder="Type Id to delete"
          onChange={handleChange}
        ></input>
      
          <button  type="button" onClick={handleDelete}>Delete record</button>
      </div>
    </div>
  );
};

const handleFetch = () => {};

export default DeleteRecord;
