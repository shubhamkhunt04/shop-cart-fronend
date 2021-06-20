import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from './AppContext';
import App from './App';
import './index.css';

ReactDOM.render(
  <ChakraProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
