import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { getContact, getFilter } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  const handleRemoveContact = contactId => dispatch(removeContact(contactId));

  const filteredContactList = filter
    ? contacts.contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts.contacts;

  return (
    <TransitionGroup>
      {filteredContactList.map(contact => (
        <CSSTransition key={contact.id} timeout={500} classNames="contact">
          <Contact contact={contact} onDelete={handleRemoveContact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
