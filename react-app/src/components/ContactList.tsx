import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
// interface Contact {
//   id: number;
//   name: string;
//   email: string;
// }
// interface ContactListProps {
//   contacts: Contact[];
// }

function ContactList(props: any) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  console.log(props);
  const inputEl = useRef(null);
  const list = props.contact.map((contact: any) => {
    console.log();
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="search contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          ></input>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{list}</div>
    </div>
  );
}

export default ContactList;
