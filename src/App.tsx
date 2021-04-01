import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import {BookProvider} from './context/BookContext';


export function App() {
  return (
    <BookProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </BookProvider>
  );
}
