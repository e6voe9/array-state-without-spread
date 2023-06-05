import { useState, SyntheticEvent, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import { List } from "./List";

interface IUser {
  id: string;
  name: string;
  number: string;
}

type Users = IUser[];

let contacts: Users = [];

function App() {
  const [_, setContactsListDidUpdate] = useState(false);
  const forceReRender = useCallback(
    () => setContactsListDidUpdate((v) => !v),
    []
  );

  const deleteContact = useCallback((id: string) => {
    contacts = contacts.filter((c) => c.id !== id);
    forceReRender();
  }, []);

  const sortContacts = useCallback(() => {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    forceReRender();
  }, []);

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      number: { value: string };
      reset: () => void;
    };
    const name = target.name.value;
    const number = target.number.value;

    if (!name || !number) return;

    contacts.push({
      name,
      number,
      id: nanoid(),
    });

    target.reset();

    // calling this function to trigger re-render
    forceReRender();
  };

  useEffect(() => {
    return () => {
      contacts = [];
    };
  }, []);

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input name="name" />
        <input name="number" />
        <button type="submit">ADD CONTACT</button>
      </form>

      <hr />

      {contacts.length ? <h2>List of contacts:</h2> : <h2>No contacts!</h2>}

      <List items={contacts} onDelete={deleteContact} />

      {contacts.length !== 0 && (
        <button onClick={sortContacts} type="button">
          Sort the list
        </button>
      )}
    </div>
  );
}

export default App;
