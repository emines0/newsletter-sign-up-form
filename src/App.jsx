import NewsletterContainer from './components/NewsletterContainer';
import { GlobalProvider } from './context/context';

function App() {
  return (
    <GlobalProvider>
      <NewsletterContainer />
    </GlobalProvider>
  );
}

export default App;
