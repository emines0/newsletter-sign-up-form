import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [lgSize, setLgSize] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [required, setRequired] = useState(false);
  const [validEmail, setValidEmail] = useState();
  const [form, setForm] = useState(true);

  const checkSize = () => {
    if (window.innerWidth < 768) {
      setLgSize(false);
    } else {
      setLgSize(true);
    }
  };

  const checkRequired = (e) => {
    if (e.target.value === '') {
      setRequired(true);
    } else {
      setRequired(false);
    }
  };

  const validateEmail = (value) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (value === '') {
      setValidEmail(false);
      setForm(true);
    } else if (!value.match(isValidEmail)) {
      setValidEmail(false);
      setForm(true);
    } else {
      setValidEmail(true);
      setForm(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        lgSize,
        inputValue,
        required,
        validEmail,
        form,
        setForm,
        validateEmail,
        setValidEmail,
        setInputValue,
        setLgSize,
        checkSize,
        checkRequired,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
