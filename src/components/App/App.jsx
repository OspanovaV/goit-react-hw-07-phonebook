import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { filterContacts } from 'redux/filterSlice';
import { getContacts, getFilter } from 'redux/selector';
import { addContactItem } from 'redux/contactsSlice';
import { Container, Section, TitleH1, TitleH2 } from './AppStyled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterName = useSelector(getFilter);
  
// Добавляет контакт в список
   const addContact = ({ name, number }) => {
    const normalizedFind = name.toLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = contacts.find(
      contact => contact.number === number
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }
   
     dispatch(addContactItem({ name, number }));
  };
  
  const handleFilter = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterContacts(value));
  };

 // Возвращает результат фильтра
  const getFilterContact = () => {
    if (!filterName) {
      return contacts;
    }
    const normalaizedFilter = filterName.toLowerCase();

    return contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };
   

  return (
        <Container>
          <Section title="Phonebook">
            <TitleH1>Phonebook</TitleH1>
            <ContactForm onAddContacs={addContact} />
          </Section>
          <Section title="Contacts">
            <TitleH2>Contacts</TitleH2>
            <Filter value={filterName} onChange={handleFilter} />
            <ContactList
              contacts={getFilterContact()}             
            />
          </Section>
        </Container>
      );
}

 