import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <TransitionGroup>
      {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={500} classNames="contact">
          <Contact contact={contact} onDelete={onDelete} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
