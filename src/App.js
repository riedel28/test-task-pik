import React from 'react';
import { connect } from 'react-redux';
import './csssrc/less/index.css';

import MessageForm from './components/MessageForm';

const App = () => (
  <div className="app">
    <MessageForm />
  </div>
);

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(mapStateToProps)(App);
