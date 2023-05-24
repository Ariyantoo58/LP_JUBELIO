
import RouteApp from './Routes/RoutesApp';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Footer from './components/footer';
import Navbar from './components/navbar/index2';


function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Box mt={{ base: '70px', lg: '95px' }}>
        <RouteApp />
      </Box>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
