import css from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <div className={css.messageWrapper}>
      <p className={css.message}>{message}</p>
    </div>
  );
}
