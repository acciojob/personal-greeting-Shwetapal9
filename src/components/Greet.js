import React, { useState } from "react";

const Greet = () => {
  let [name, setName] = useState("");
  
  return (
    <div>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" onChange={(event)=> {setName("Hello " + event.target.value +"!")}} />
       <p>{name}</p>
    </div>
  );
};

export default Greet;
