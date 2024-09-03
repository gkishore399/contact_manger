import React from "react";

import { Link } from "react-router-dom";

function ContactCard(props: any) {
  return (
    <div
      className="item"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="content">
        <img className="ui avatar image" src=""></img>
        <Link
          to={`/contact/${props.contact.id}`}
          state={{ contact: props.contact }}
        >
          <div className="header">{props.contact.user.name}</div>
          <div>{props.contact.user.email}</div>
        </Link>
      </div>
      <Link to={`/edit`} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{
            color: "blue",
            marginTop: "20px",
            display: "",
          }}
        ></i>
      </Link>

      <i
        className="trash alternate outline icon"
        onClick={() => {
          props.clickHandler(props.contact.id);
        }}
        style={{
          color: "red",
          marginTop: "20px",
          display: "",
        }}
      ></i>
    </div>
  );
}

export default ContactCard;
