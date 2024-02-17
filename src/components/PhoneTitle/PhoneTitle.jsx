import { createRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './PhoneTitle.module.css';

export default function PhoneTitle() {
  const itemRef = createRef(null);

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames={css} nodeRef={itemRef}>
      <h1 className={css.title} ref={itemRef}>
        Phonebook 06
      </h1>
    </CSSTransition>
  );
}
