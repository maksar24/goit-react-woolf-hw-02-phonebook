import Button from 'components/Button/Button';
import { Item, List, Text } from './ContactList.styles';

const ContactList = ({ data, searchName, handleDelete }) => {
  return (
    <List>
      {data
        .filter(({ name }) => {
          return name.toLowerCase().includes(searchName.toLowerCase());
        })
        .map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>{name}</Text>
              <Text>{number}</Text>
              <Button action={() => handleDelete(id)}>Delete</Button>
            </Item>
          );
        })}
    </List>
  );
};

export default ContactList;
