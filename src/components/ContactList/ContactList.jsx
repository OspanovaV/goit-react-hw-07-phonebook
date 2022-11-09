
import { deleteContact } from 'redux/operations';
import { List, Item, Button } from './ContactListStyled';
import { useDispatch } from 'react-redux';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();   

  const ContactItem = contacts.map(({ id, name, phone }) => {
    return (    
      <Item key={id}>
        <p>
          {name}: {phone}
        </p>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </Item>
    );
  });

  return <List>{ContactItem}</List>
};

