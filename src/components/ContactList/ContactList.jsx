import { useSelector } from "react-redux";


export function ContactList() {
const contacts = useSelector();

  return (
    <ul className="list">
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </ul>
  );
}
