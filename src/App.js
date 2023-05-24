
import RouteApp from './Routes/RoutesApp';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Footer from './components/footer';
import Navbar from './components/navbar/index2';
import CRM from './pages/produk/CRM';
import Finance from './pages/produk/Finance';
import HR from './pages/produk/HR Management';
import ProjectManagement from './pages/produk/Project Management';
import Marketing from './pages/produk/Marketing';


function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Box mt={{ base: '70px', lg: '95px' }}>
        <RouteApp />
        {/* <Marketing/> */}
      </Box>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
