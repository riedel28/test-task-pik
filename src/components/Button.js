import React from 'react';

export default ({ children, type, onClick }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);
