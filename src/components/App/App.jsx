import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { filterContacts } from 'redux/filterSlice';
import { addContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selector';
import { Container, Section, TitleH1, TitleH2 } from './AppStyled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);
  
useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);

// Добавляет контакт в список
   const addNewContact = ({ name, phone }) => {
    const normalizedFind = name.toLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
    const findNumber = contacts.find(
      contact => contact.phone === phone
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }   
     dispatch(addContact({ name, phone }));
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
            <ContactForm onAddContacs={addNewContact} />
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

 