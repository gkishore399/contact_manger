import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../api/contacts";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

interface Contact {
  id: string;
  name: string;
  email: string;
}
function App() {
  // const contacts: Contact[] = [
  //   {
  //     id: "1",
  //     name: "kijhsore",
  //     email: "kishore@gamidl.com",
  //   },
  //   {
  //     id: "1",
  //     name: "kijhsore",
  //     email: "kishore@gamidl.com",
  //   },
  // ];
  // const [contacts, setContacts] = useState<
  //   { id?: any; name: string; email: string }[]
  // >([]);

  const [contacts, setContacts] = useState<
    { id?: any; user: { name: string; email: string } }[]
  >([]);
  const [useSearch, setUsesearch] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id?: any; user: { name: string; email: string } }[]
  >([]);

  const Local_storage: string = "contact";
  const addContactHandler = (user: { name: string; email: string }) => {
    const request = {
      id: uuidv4(),
      user,
    };

    const response: any = api.post("/contacts", request);
    // console.log(response.data);

    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact: any) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, user } = response.data;
    setContacts(
      contacts.map((c) => {
        return c.id === id ? { ...response.data } : contact;
      })
    );
  };
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const retrievedContacts = async () => {
    const response = await api.get("/contacts");

    return response.data;
  };
  const searchHandler = (searchTerm: any) => {
    setUsesearch(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    // const retrievedContacts: any = JSON.parse(
    //   localStorage.getItem(Local_storage) || "[]"
    // );
    // setContacts(retrievedContacts);
    const getContacts = async () => {
      const allContacts = await retrievedContacts();

      if (allContacts) setContacts(allContacts);
    };
    getContacts();
  }, []);
  useEffect(() => {
    localStorage.setItem(Local_storage, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <Header />
      <div style={{ padding: "40px" }}>
        <Router>
          <Routes>
            <Route
              path="/add"
              element={<AddContact addContactHandler={addContactHandler} />}
            />
            <Route
              path="/"
              element={
                <ContactList
                  getContactId={removeContactHandler}
                  contact={useSearch.length < 1 ? contacts : searchResults}
                  term={useSearch}
                  searchKeyword={searchHandler}
                />
              }
            />
            <Route
              path="/contact/:id"
              element={<ContactDetail></ContactDetail>}
            ></Route>
            <Route
              path="/edit"
              element={
                <EditContact updateContactHandler={updateContactHandler} />
              }
            />
          </Routes>
        </Router>
      </div>

      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contact={contacts} getContactId={removeContactHandler} /> */}
    </>
  );
}

export default App;
