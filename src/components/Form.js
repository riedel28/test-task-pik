import React, { Component } from 'react';
import Button from './Button';

class Form extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({});
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2 className="form-title">Отправить сообщение</h2>
        <p className="form-subtitle">Анонимные сообщения рассматриваются</p>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="birthdate" />
        <input type="text" name="message" />
        <Button>Очистить</Button>
        <Button>Отправить</Button>
      </form>
    );
  }
}

export default Form;
