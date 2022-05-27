import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Wrapper, Title } from './ContactsPage.styled';
export default function ContactsPage() {
  return (
    <Wrapper>
      <Title>CONTACTS BOOK</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
