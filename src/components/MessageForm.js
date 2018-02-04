import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from './Button';

// const isYearValid = dateString => {
//   const year = Number(dateString.slice(6, 10));
//   const yearToMilliseconds = Date.parse(year);

//   const startYear = Date.parse(1900);

//   const now = Date.now();

//   if (yearToMilliseconds > startYear && yearToMilliseconds < now) {
//     return true;
//   }

//   return false;
// };

const isCreditAllowed = num => {
  const year = Number(num.slice(6, 10));

  const now = new Date();
  const presentYear = now.getFullYear();

  const maxAge = presentYear - 74;
  const minAge = presentYear - 18;

  if (year > maxAge && year <= minAge) {
    return true;
  }

  return false;
};

const submitValues = values => {
  console.log(values);

  // console.log(isYearValid(values.birthdate));
  console.log(isCreditAllowed(values.birthdate));
};

const validate = values => {
  const errors = {};

  const dateRegExp = '^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4})$';

  if (!values.name) errors.name = 'Введите имя';

  if (!values.email) {
    errors.email = 'Введите email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Введите корректный email';
  }

  if (!values.birthdate) {
    errors.birthdate = 'Введите дату рождения';
  } else if (!values.birthdate.match(dateRegExp)) {
    errors.birthdate = 'Неверный формат';
  } else if (!isCreditAllowed(values.birthdate)) {
    errors.birthdate = 'Ипотечный кредит предоставляется гражданам РФ в возрасте от 18 до 74 лет';
  }

  if (!values.message) {
    errors.message = 'Введите сообщение';
  }

  return errors;
};

const renderField = ({
  input, type, label, meta: { touched, error, warning },
}) => (
  <div>
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const MessageForm = props => {
  const {
    handleSubmit, pristine, submitting, reset,
  } = props;
  return (
    <form className="form" onSubmit={handleSubmit(submitValues)}>
      <h2 className="form-title">Отправить сообщение</h2>
      <p className="form-subtitle">Анонимные сообщения рассматриваются</p>
      <Field label="Имя" type="text" name="name" component={renderField} placeholder="Имя" />
      <Field label="Email" type="email" name="email" component={renderField} placeholder="Email" />
      <Field
        label="Дата рождения"
        type="text"
        name="birthdate"
        component={renderField}
        placeholder="Дата рождения"
      />
      <Field
        label="Сообщение"
        type="text"
        name="message"
        component={renderField}
        placeholder="Сообщение"
      />
      <Button type="button" onClick={reset} disabled={pristine}>
        Очистить
      </Button>
      <Button type="submit" disabled={pristine || submitting}>
        Отправить
      </Button>
    </form>
  );
};

export default reduxForm({
  validate,
  form: 'MessageForm',
})(MessageForm);
