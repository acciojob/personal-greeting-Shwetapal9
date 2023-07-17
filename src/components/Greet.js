import React, { useState } from "react";

const Greet = () => {
  let [name, setName] = useState("");
  const display = function (event) {
    setName(event.target.value);
  };
  return (
    <div>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" onChange={display} value={name} />
       {name.length > 0 && <p>Hello {name}!</p>}
    </div>
  );
};

export default Greet;
