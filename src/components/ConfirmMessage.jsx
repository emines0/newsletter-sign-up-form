import successIcon from '../assets/images/icon-success.svg';
import { GlobalContext } from '../context/context';
import { useContext } from 'react';

const ConfirmMessage = () => {
  const { inputValue, setForm, setInputValue } = useContext(GlobalContext);
  const handleClick = () => {
    setForm(true);
    setInputValue('');
  };
  return (
    <div className="container confirm">
      <div className="confirm-img">
        <img src={successIcon} alt="succes-icon" />
      </div>
      <div className="confirm-text-content">
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{inputValue}</strong>.
          Please Open it and click the button inside to confirm your
          subscription{' '}
        </p>
      </div>
      <div className="button-container">
        <button className="btn" onClick={() => handleClick()}>
          Dismiss Message
        </button>
      </div>
    </div>
  );
};

export default ConfirmMessage;
