import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";


export function ContactList() {
const contacts = useSelector(state => state.contacts.contactItems);

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
