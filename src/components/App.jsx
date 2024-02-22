import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchBar } from "./SearchBar/SearchBar";

export const App = () => {
  return <div>
  <h1 className="header">Phonebook</h1>
  <ContactForm addContactCard={addContactCard} />
  <SearchBar inputValue={inputValue} handleFilter={handleFilter} />
  <ContactList contacts={activeCards} handleDelete={handleDelete} />
</div>
};
