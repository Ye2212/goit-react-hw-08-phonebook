import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { ContactListEl, ContactListItem } from './ContactList.styled';
import { fetchContactsThunk } from 'redux/contacts/contacts-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filterValue = useSelector(contactsSelectors.getFilterValue);
  // const isLoading = useSelector(getLoading);
  // const isError = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filteredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filteredContacts();
  return (
    <ContactListEl>
      {contacts &&
        filteredContactList.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id}>
              <Contact name={name} number={number} contactId={id} />
            </ContactListItem>
          );
        })}
    </ContactListEl>
  );
}

export default ContactList;
