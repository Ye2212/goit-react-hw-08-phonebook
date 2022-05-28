import { ContactItem, DeleteBtn, Name, Number } from './Contact.styled';
import { FaTrash } from 'react-icons/fa';
import { deleteContactThunk } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

function Contact({ name, number, contactId }) {
  const dispatch = useDispatch();

  return (
    <>
      <ContactItem>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </ContactItem>
      <DeleteBtn
        type="button"
        onClick={() => dispatch(deleteContactThunk(contactId))}
      >
        <FaTrash />
      </DeleteBtn>
    </>
  );
}

export default Contact;
