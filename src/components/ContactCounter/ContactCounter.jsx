import { useSelector, useDispatch } from 'react-redux';
import { getContact } from '../../redux/selectors';
import { removeAllContact } from '../../redux/contactsSlice';
import css from './ContactCounter.module.css';

export default function ContactCounter() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const countContacts = contacts.contacts.length;

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Total contacts:</p>
      <span className={css.total}> {countContacts}</span>
      <button className={css.button} type="submit" onClick={() => dispatch(removeAllContact())}>
        All DELETE
      </button>
    </div>
  );
}
