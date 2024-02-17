import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <h2 className={css.section}>
      <section className={css.text}>{title}</section>
      {children}
    </h2>
  );
}
