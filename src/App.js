
import RouteApp from './Routes/RoutesApp';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Footer from './components/footer';
import Navbar from './components/navbar/index2';

import SocialMedia from './pages/produk/Social Media';


function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Box mt={{ base: '95px', lg: '95px' }}>
        {/* <RouteApp /> */}
        <SocialMedia/>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
