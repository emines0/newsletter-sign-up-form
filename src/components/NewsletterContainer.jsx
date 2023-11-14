import React, { useContext } from 'react';
import { Newsletter } from './Newsletter';
import ConfirmMessage from './ConfirmMessage';
import { GlobalContext } from '../context/context';

const NewsletterContainer = () => {
  const { form } = useContext(GlobalContext);
  return <>{form ? <Newsletter /> : <ConfirmMessage />}</>;
};

export default NewsletterContainer;
