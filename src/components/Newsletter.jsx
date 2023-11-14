import { useContext } from 'react';
import { GlobalContext } from '../context/context';
import mobileImg from '../assets/images/illustration-sign-up-mobile.svg';
import desktopImg from '../assets/images/illustration-sign-up-desktop.svg';
import iconList from '../assets/images/icon-list.svg';

export const Newsletter = () => {
  const {
    lgSize,
    checkSize,
    inputValue,
    setInputValue,
    validEmail,
    validateEmail,
  } = useContext(GlobalContext);

  return (
    <div
      className="container newsletter-container"
      resize={window.addEventListener('resize', checkSize)}
    >
      <div
        className="showcase"
        style={
          !lgSize
            ? { backgroundImage: `url(${mobileImg})` }
            : { backgroundImage: `url(${desktopImg})` }
        }
      ></div>
      <div className="newsletter">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="list">
          <li>
            <img src={iconList} alt="checkmark" />{' '}
            <span>Product discovery and building what matters</span>
          </li>
          <li>
            <img src={iconList} alt="checkmark" />{' '}
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li>
            <img src={iconList} alt="checkmark" /> <span>And much more!</span>
          </li>
        </ul>
        <form>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            name="email"
            value={inputValue}
            id="email"
            className={validEmail === false ? 'error' : ''}
            placeholder="email@company.com"
            onChange={(e) => setInputValue(e.target.value)}
          />
          {validEmail === false && (
            <span className="error">Valid email address</span>
          )}

          <div className="button-container">
            <button
              className="btn"
              type="button"
              onClick={() => validateEmail(inputValue)}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
