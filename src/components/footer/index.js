import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  HStack,
  Center,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaMailchimp, FaMap, FaPhone, FaTwitter } from 'react-icons/fa';


import logo from '../../assets/deoapp/deoapp colors (4).png'
import { FiFacebook } from 'react-icons/fi';
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

function Footer() {
  return (
    <Box pt={'5%'}>
      <Box
        bg={'white'}
        color={'black'}
        borderTop={'1px solid #B9BBBD'}
        paddingLeft={{ base: '3%' }}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '3fr 1fr 3fr 1fr ' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Image w={'75%'} src={logo} />
              </Box>

            </Stack>
            <Stack color={'black'} align={'flex-start'}>
              <ListHeader  >Company</ListHeader>
              <Link href={'#'} color={'grey'} _hover={{ color: 'black' }}>About</Link>
              <Link href={'#'} color={'grey'} _hover={{ color: 'black' }}>Contact Us</Link>
              <Link href={'#'} color={'grey'} _hover={{ color: 'black' }}>Service</Link>
            </Stack>
            <Stack align={'flex-start'} w={'100%'}>
              <ListHeader color={'black'}>Contact Us</ListHeader>
              <Link href={'#'} w='100%' color={'grey'} _hover={{ color: 'black' }}>
                <HStack display={'flex'} gap={'5%'}>
                  <FaPhone />
                  <Text>
                    +1 (917)-300-0893
                  </Text>
                </HStack>
              </Link>
              <Link href={'#'} w='100%' color={'grey'} _hover={{ color: 'black' }}>
                <HStack display={'flex'} gap={'5%'}>
                  <FaMailBulk />
                  <Text>
                    info@deoapp.com
                  </Text>
                </HStack>
              </Link>
              <Link href={'#'} w='100%' color={'grey'} _hover={{ color: 'black' }}>
                <HStack display={'flex'} gap={'5%'}>
                  <FaMap w={'50%'} justifyContent={'start'} />
                  <Text w='100%'>
                    Metland Puri, Jl. Puri Utama No.7 Tangerang, Banten.
                  </Text>
                </HStack>
              </Link>

            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader color={'black'}>Social Media Links</ListHeader>
              <Link href={'#'} w='100%' color={'grey'} _hover={{ color: 'black' }}>
                <HStack display={'flex'} gap={'5%'}>
                  <FiFacebook />
                  <Text>
                    deoappcom
                  </Text>
                </HStack>
              </Link><Link href={'#'} w='100%' color={'grey'} _hover={{ color: 'black' }}>
                <HStack display={'flex'} gap={'5%'}>
                  <FaTwitter />
                  <Text>
                    deoappcom
                  </Text>
                </HStack>
              </Link><Link href={'#'} w='100%' color={'grey'} _hover={{ color: 'black' }}>
                <HStack display={'flex'} gap={'5%'}>
                  <FaInstagram />
                  <Text>
                    deoappcom
                  </Text>
                </HStack>
              </Link><Link href={'#'} w='100%' color={'grey'} _hover={{ color: 'black' }}>
                <HStack display={'flex'} gap={'5%'}>
                  <FaLinkedin />
                  <Text>
                    deoappcom
                  </Text>
                </HStack>
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>

      </Box>
      <Box>
        <Center fontSize={'sm'} py={'10px'} border={'1px solid #f2f2f2'}>
          © 2023 Deoapp. All rights reserved
        </Center>
      </Box>
    </Box>
  );
}

export default Footer