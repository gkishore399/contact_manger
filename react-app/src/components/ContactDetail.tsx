import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function ContactDetail(props: any) {
  let { state } = useLocation();
  let { name, email } = state.contact.user;
  return (
    <div className="main" style={{ padding: "50px" }}>
      <div className="ui card centered">
        <div className="image">
          <img></img>
          <div className="content">
            <div className="header"> {name}</div>
          </div>
          <div className="description"> {email}</div>
        </div>
        <div>
          <Link to={"/"}>
            <button>Back to add contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
