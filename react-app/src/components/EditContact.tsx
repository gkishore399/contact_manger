import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

function EditContact(props: any) {
  let { state } = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState(state.contact.user.name);
  const [email, setEmail] = useState(state.contact.user.email);

  function update(e: React.FormEvent) {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("all are mandatory");
    }
    props.updateContactHandler({
      id: state.contact.id,
      user: { name: name, email: email },
    });
    navigate("/");
    setName("");
    setEmail("");
  }

  return (
    <div className="ui main">
      <h2>Update contact</h2>
      <form className="ui form " onSubmit={update}>
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
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
}

export default EditContact;
