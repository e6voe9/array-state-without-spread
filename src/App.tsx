import { useState, SyntheticEvent, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";

interface IUser {
  id: string;
  name: string;
  number: string;
}

type Users = IUser[];

let contacts: Users = [];

function App() {
  const [_, setContactsListDidUpdate] = useState(false);

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
    setContactsListDidUpdate((v) => !v);
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
      {contacts.length ? (
        <h2 key="list-1">List of contacts:</h2>
      ) : (
        <h2 key="list-2">No contacts!</h2>
      )}

      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <b>{name}: </b> {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
