import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from './Button';

class MessageForm extends Component {
  submitValues = values => {
    console.log(values);
    this.props.reset();
  };

  render() {
    const { handleSubmit, reset } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit(this.submitValues)}>
        <h2 className="form-title">Отправить сообщение</h2>
        <p className="form-subtitle">Анонимные сообщения рассматриваются</p>
        <Field label="Имя" type="text" name="name" component="input" />
        <Field label="Email" type="email" name="email" component="input" />
        <Field label="Дата рождения" type="text" name="birthdate" component="input" />
        <Field label="Сообщение" type="text" name="message" component="input" />
        <Button onClick={reset}>Очистить</Button>
        <Button type="submit">Отправить</Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'MessageForm',
})(MessageForm);
