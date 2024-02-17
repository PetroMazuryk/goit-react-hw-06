import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContact } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const handleFormSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const contactAlreadyExists = contacts.contacts.some(item => item.name === name);

    if (contactAlreadyExists) {
      toast.error(`A contact with the name "${name}" already exists`);
    } else {
      const newContact = { id: nanoid(10), name, number };
      dispatch(addContact(newContact));
      resetForm();
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={handleFormSubmit}
      >
        <Form className={css.form}>
          <div className={css.labelWrapper}>
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field className={css.field} type="text" name="name" id={nameFieldId} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.labelWrapper}>
            <label className={css.label} htmlFor={numberFieldId}>
              Number
            </label>
            <Field className={css.field} type="number" name="number" id={numberFieldId} />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>

          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
          error: {
            duration: 4000,
            icon: '🔥',
          },
        }}
      />
    </div>
  );
}
