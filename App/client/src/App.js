//App.js

import { BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import { fetchAllQuestions } from './actions/question.js';
import { fetchAllUsers } from './actions/users';
import { fetchAllNgos } from './actions/ngos.js';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './components/Chakra/theme.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

import LandingPage from './pages/LandingPage/LandingPage.jsx';

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
    dispatch(fetchAllNgos())
  }, [dispatch])
  
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
      <I18nextProvider i18n={i18n}> 
        <Router>
          {/* <Navbar />*/}
          <AllRoutes /> 
          {/* <LandingPage /> */}
        </Router>
        </I18nextProvider>
      </div>
    </ChakraProvider>
  );
}

export default App;

