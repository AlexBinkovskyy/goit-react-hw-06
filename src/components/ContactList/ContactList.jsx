import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';

export function ContactList() {
  const storedContacts = useSelector(state => state.contacts.contactItems);
  const filterValue = useSelector(state => state.filteredContacts.value);

  const contacts = storedContacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <ul className="list">
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}
