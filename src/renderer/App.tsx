import { ChakraProvider } from '@chakra-ui/react';
import theme from 'config/theme';
import Main from 'core/components/global/layout/Main';
import HomePage from 'core/components/pages/home/HomePage';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/global.css';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </Main>
    </ChakraProvider>
  );
}
