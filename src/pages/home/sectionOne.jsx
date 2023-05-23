import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FcBusiness,
  FcCalculator,
  FcComments,
  FcFactory,
  FcMoneyTransfer,
  FcPicture,
  FcPuzzle,
  FcShipped,
} from 'react-icons/fc';

import image1 from '../../assets/logo Deoapp/Logo Deoapp 1 CRM.png'
import image2 from '../../assets/logo Deoapp/Logo Deoapp 1 Finance.png'
import image3 from '../../assets/logo Deoapp/Logo Deoapp 1 HR Management.png'
import image4 from '../../assets/logo Deoapp/Logo Deoapp 1 Marketer.png'
import image5 from '../../assets/logo Deoapp/Logo Deoapp 1 marketing.png'
import image6 from '../../assets/logo Deoapp/Logo Deoapp 1 POS.png'
import image7 from '../../assets/logo Deoapp/Logo Deoapp 1 Project Management.png'
import image8 from '../../assets/logo Deoapp/Logo Deoapp 1 social media.png'

const CardProps = {
  heading: '',
  description: '',
  icon: null,
  href: ''
};

const Card = ({ heading, description, image, href }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px', lg: '250px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}>
      <Stack align={'start'} spacing={2}>
      <Box>
        <Image src={image}/>
      </Box>
        <Box mt={2}>
          <Heading size="md" h={'10vh'}>{heading}</Heading>
          <Text fontSize={'sm'} h={'15vh'}>
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

function SectionOne() {
  return (
    <>
      <Box w={{ base: '100%', lg: '60%' }} m={'auto'}>
        <Box p={4} w={'100%'}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Our Product</Heading>
          </Stack>

        </Box>
      </Box>

      <Box p={5}>
        <Container maxW={'7xl'} mt={2}>
          <Flex flexWrap="wrap" gap={10} justify="center">
            <Card
              heading={'CRM'}
              description={
                'Kontrol semua operasional bisnis dalam satu platform terintegrasi.'
              }
              image={image1}
            />
            <Card
              heading={'Finance'}

              description={
                'Visibilitas dan kontrol penuh kelola gudang langsung lewat aplikasi.'
              }
              image={image2}
            />
            <Card
              heading={'HR Management'}

              description={
                'Aplikasi kasir gratis jualan online dan offline agar bisnis berjalan lebih optimal.'
              }
              image={image3}
            />
            <Card
              heading={'Marketer'}

              description={
                'Buat toko online dengan desain premium tanpa keluarkan biaya apa pun.'
              }
              image={image4}
            />
            <Card
              heading={'Marketing'}

              description={
                'Urus pemenuhan orderan lebih nyaman dan aman dengan partner terbaik.'
              }
              image={image5}
            />
            <Card
              heading={'POS'}

              description={
                'Sambungkan pesan dan berinteraksi dengan pelanggan di berbagai marketplace lewat satu platform.'
              }
              image={image6}
            />
            <Card
              heading={'Product Management'}

              description={
                'Urus pemenuhan orderan lebih nyaman dan aman dengan partner terbaik.'
              }
              image={image7}
            />
            <Card
              heading={'Social Media'}

              description={
                'Sambungkan pesan dan berinteraksi dengan pelanggan di berbagai marketplace lewat satu platform.'
              }
              image={image8}
            />

          </Flex>
        </Container>

      </Box>
    </>
  )
}
export default SectionOne