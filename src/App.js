

import { ChakraProvider, theme } from '@chakra-ui/react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Chat from './pages/produk/Chat';
import IndexHome from './pages/home';
import Layanan from './pages/dukungan/layanan';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Layanan/>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
