import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Image,
} from '@chakra-ui/react';
import {
  Button,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';


const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px', lg: '250px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={10}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={30}
          h={30}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Cek Fitur
        </Button>
      </Stack>
    </Box>
  )
}

const features = [
  {
    id: 1,
    title: 'Pengalaman Pengguna yang Ramah: ',
    text: 'Desain antarmuka yang intuitif dan mudah digunakan, sehingga kamu bisa fokus pada pertumbuhan bisnis atau kariermu tanpa hambatan.'
  },
  {
    id: 2,
    title: 'Produktivitas yang Meningkat:',
    text: 'Automatisasi tugas-tugas rutin dan pengelolaan yang efisien membantu mengoptimalkan waktu dan usaha yang kamu investasikan.'
  },
  {
    id: 3,
    title: 'Solusi Kekinian untuk Sukses dalam Bidangmu: ',
    text: 'Dengan fitur lengkap yang mencakup keuangan, HR, media sosial, pemasaran, manajemen pelanggan, dan program masterclass, DeoApp memberikan solusi yang terpadu untuk kesuksesanmu.'
  },
  {
    id: 4,
    title: 'Dukungan Pelanggan yang Responsif: ',
    text: 'Tim support kami siap membantu dan menjawab pertanyaanmu sepanjang waktu. Kami berkomitmen untuk memberikan pelayanan terbaik kepada pengguna DeoApp.'
  },

]

function SectionTwo() {
  return (
    <Box bg="#f5faff">
      <Box w={'90%'} m={'auto'} display={{ base: "contents", lg: "flex" }}>
        <Box p={4} w={["100%", "90%", '50%']}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Keunggulan Deoapp</Heading>
            {/* <Text color={'gray.600'} fontSize={'xl'}>
            Ribuan toko sudah pakai dan omzet jualan naik hingga 60% cuma dalam 3 bulan aja!
          </Text> */}
          </Stack>

          <Container maxW={'6xl'} mt={10} color={'black'}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 1 }} spacing={4}>
              {features.map((feature) => (
                <HStack key={feature.id} align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} fontSize={'25px'} color={'green'} />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>{feature.title}</Text>
                    <Text color={'gray.600'}>{feature.text}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        <Box p={5} w={["100%", "100%", '50%']}>

          <Container maxW={'7xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Box w='230px'>
                <Image h='100%' src={'https://dmt5ct25cwczv.cloudfront.net/images/blog-post/2020/11/Difference-between-UI,-UX,-&-Usability-5b1a1afc-ac2e-4d75-9178-59103f0b7ea9-desktop.png'} />
              </Box>
              <Box w='230px'>
                <Image src={'https://kerjoo.com/blog/content/images/wordpress/2021/06/sibuk-dan-produktif-3-1024x675.jpg'} />
              </Box>
              <Box w='230px'>
                <Image h='100%' src={'https://kledo.com/blog/wp-content/uploads/2022/09/pengusaha-sukses-dua.jpg'} />
              </Box>
              <Box w='230px'>
                <Image src={'https://media.istockphoto.com/id/1307155382/id/vektor/ilustrasi-dukungan-pelanggan-datar-organik-ilustrasi-vektor.jpg?s=170667a&w=0&k=20&c=FtTwDepeEdKO1A5glt3yu8hpe4QRg5zkxnlD9bgBAWw='} />
              </Box>
            </Flex>
          </Container>

        </Box>
      </Box>
    </Box>
  );
}

export default SectionTwo

