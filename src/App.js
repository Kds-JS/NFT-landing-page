import React from 'react';
import {
  ChakraProvider,
  Box,
  extendTheme
} from '@chakra-ui/react';


import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
import Faq from './Components/Faq';
import Roadmap from './Components/Roadmap';
import Team from './Components/Team';

const colors = {
  primary: {
    900: '#D0CDE0',
    800: '#636ED7',
    700: '##7CC4F4',
    600: '#D4618D',
    500: '#D3336D'
  },
  secondary: {
    900: '#01040D',
    800: '#575761'
  }
}

const styles = {
  global: {
    'html, body': {
      color: 'secondary.800',
      lineHeight: 'tall',
      fontSize: '16px',
      backgroundColor: "secondary.900",
      boxSizing: 'border-box'
    },
    a: {
      fontSize: "20px",
      textDecoration: "none"
    }
  },
}

const breakpoints = {
  sm: '385px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ colors,styles, breakpoints})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <About/>
      <Roadmap/>
      <Faq/>
      <Team/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
