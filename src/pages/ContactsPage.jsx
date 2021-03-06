import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Wrapper } from './ContactsPage.styled';
export default function ContactsPage() {
  return (
    <Wrapper>
      <ContactForm />
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
