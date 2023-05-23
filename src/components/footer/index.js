import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaMailchimp, FaPhone, FaTwitter } from 'react-icons/fa';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

function Footer() {
  return (
    <Box
      bg={'#21215e'}
      color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '3fr 1fr 3fr 1fr ' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image w={'75%'} src='https://assets.cdn.filesafe.space/g5ixcUwLF94aB6ka3IVG/media/641e709f9ccfe095e9a58460.png' />
            </Box>
            <Text fontSize={'sm'}>
              © 2023 Deoapp. All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Service</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contact Us</ListHeader>
            <Link href={'#'} display={'flex'}> <FaPhone/> +1 (917)-300-0893</Link>
            <Link href={'#'} display={'flex'}> <FaMailBulk/> info@deoapp.com</Link>
            <Link href={'#'} display={'flex'}> <FaLocationArrow/> Jl. Puri Utama No.7, RT.004/RW.008, Petir, Kec. Cipondoh, Kota Tangerang, Banten 15147Jl. Puri Utama No.7, RT.004/RW.008, Petir, Kec. Cipondoh, Kota Tangerang, Banten 15147</Link>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Social Media Links</ListHeader>
            <Link href={'#'} display={'flex'}> <FaFacebook/> deoappcom</Link>
            <Link href={'#'} display={'flex'}> <FaTwitter/> deoappcom </Link>
            <Link href={'#'} display={'flex'}> <FaInstagram/> deoappcom</Link>
            <Link href={'#'} display={'flex'}> <FaLinkedin/> deoappcom </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Footer