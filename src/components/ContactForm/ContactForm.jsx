import { useState } from 'react';
import { Form, Label, Text, Input, AddContactBtn } from './ContactForm.styled';
import { FiUserPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import { addContactThunk } from 'redux/contacts/contacts-operations';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangePhone = e => setNumber(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContactThunk(newContact));
    // alert(`${name} is added to your contacts`);

    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Text>Phone</Text>
        <Input
          placeholder=""
          type="tel"
          name="phone"
          value={number}
          onChange={handleChangePhone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <AddContactBtn type="submit">
        <span style={{ marginRight: '10px' }}>Add</span>
        <FiUserPlus />
      </AddContactBtn>
    </Form>
  );
}

export default ContactForm;
