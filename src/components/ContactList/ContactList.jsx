import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <TransitionGroup>
      {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={500} classNames="contact">
          <Contact contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
