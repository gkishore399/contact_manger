import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

function AddContact(props: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function add(e: React.FormEvent) {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("all are mandatory");
    }
    props.addContactHandler({ name: name, email: email });
    navigate("/");
    setName("");
    setEmail("");
  }

  return (
    <div className="ui main">
      <h2>Add contact</h2>
      <form className="ui form " onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="field">
          <label>Name</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
