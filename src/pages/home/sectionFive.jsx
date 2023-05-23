import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Center,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

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
      p={10}>
      <Stack align={'start'} spacing={2}>
        <Box>
          <Image src={image} />
        </Box>
        <Box mt={2}>
          <Heading size="md" >{heading}</Heading>
          <Text mt={1} fontSize={'sm'} h={'20vh'} noOfLines={1}>
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

function SectionFive() {
  return (
    <Box bg="#f5faff">
      <Box w={{ base: '100%', lg: '60%' }} m={'auto'} paddingTop={'2%'}>
        <Box p={4} w={'100%'}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Client Kami</Heading>
            {/* <Text color={'gray.600'} fontSize={'md'}>
              Sistemm terlengkap yang dukung penuh semua kebutuhan bisnismu. Tersedia tanpa tambahan biaya.
            </Text> */}
          </Stack>

        </Box>
      </Box>

      <Box p={5}>
        <Container maxW={'7xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              description={
                'seperti aplikasi web untuk digunakan organisasi berdasarkan model SCRUM dengan papan kanban sebagai fitur utama Dan Platform Ini Juga berfungsi untuk melakukan absensi karyawan yang telah dilengkapi dengan fitur yang lengkap'
              }
              href={'#'}

              image="https://assets.cdn.filesafe.space/g5ixcUwLF94aB6ka3IVG/media/64174d501639e03e287e2160.png"
            />
            <Card
              description={
                'Integrasikan toko offline dengan aplikasi kasir buat mudahkan operasional.'
              }

              href={'#'}
              image="https://assets.cdn.filesafe.space/g5ixcUwLF94aB6ka3IVG/media/64174d501639e03e287e2160.png"
            />
            <Card
              description={
                'Interaksi langsung dengan pelanggan dari berbagai channel lewat satu platform.'
              }
              href={'#'}
              image="https://assets.cdn.filesafe.space/g5ixcUwLF94aB6ka3IVG/media/64174d501639e03e287e2160.png"
            />
            <Card
              description={
                'Kirim pesanan mudah dengan pilihan kurir yang terintegrasi.'
              }
              href={'#'}
              image="https://assets.cdn.filesafe.space/g5ixcUwLF94aB6ka3IVG/media/64174d501639e03e287e2160.png"
            />
          </Flex>
        </Container>

      </Box>
    </Box>
  )
}
export default SectionFive



export const Portofolio = () => {
  const [load, setLoad] = useState(true)
  const menu = [
    {
      title: "project",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/6418d71fecb0dd9f219c8910.png",
      description: 'Project Management seperti aplikasi web untuk digunakan organisasi berdasarkan model SCRUM dengan papan kanban sebagai fitur utama Dan Platform Ini Juga berfungsi untuk melakukan absensi karyawan yang telah dilengkapi dengan fitur yang lengkap',
    },
    {
      title: "entreperenurs",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/6418dc20ecb0ddd4cb9c8e01.png",
      description: 'Pengusaha adalah individu yang menciptakan, mengatur, dan mengelola bisnis atau perusahaan, mengambil risiko keuangan dalam mengejar keuntungan. Mereka sering dikaitkan dengan inovasi dan bersedia mengambil peluang bisnis baru atau memperkenalkan produk, layanan, atau model bisnis baru. Pengusaha dapat ditemukan di berbagai bidang, termasuk teknologi, keuangan, ritel, dan manufaktur, dan merupakan komponen penting dari ekonomi yang dinamis.',
    },
    {
      title: "algotrading",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/641881311639e0243b7ed7ee.png",
      description: 'Perdagangan algoritmik (juga disebut perdagangan otomatis, perdagangan kotak hitam, atau perdagangan algo) menggunakan program komputer yang mengikuti serangkaian instruksi (algoritma) yang ditentukan untuk melakukan perdagangan. Perdagangan, secara teori, dapat menghasilkan keuntungan dengan kecepatan dan frekuensi yang tidak mungkin dilakukan oleh seorang pedagang manusia.',
    },
    {
      title: "project",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/6418d71fecb0dd9f219c8910.png",
      description: 'Project Management seperti aplikasi web untuk digunakan organisasi berdasarkan model SCRUM dengan papan kanban sebagai fitur utama Dan Platform Ini Juga berfungsi untuk melakukan absensi karyawan yang telah dilengkapi dengan fitur yang lengkap',
    },
    {
      title: "entreperenurs",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/6418dc20ecb0ddd4cb9c8e01.png",
      description: 'Pengusaha adalah individu yang menciptakan, mengatur, dan mengelola bisnis atau perusahaan, mengambil risiko keuangan dalam mengejar keuntungan. Mereka sering dikaitkan dengan inovasi dan bersedia mengambil peluang bisnis baru atau memperkenalkan produk, layanan, atau model bisnis baru. Pengusaha dapat ditemukan di berbagai bidang, termasuk teknologi, keuangan, ritel, dan manufaktur, dan merupakan komponen penting dari ekonomi yang dinamis.',
    },
    {
      title: "algotrading",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/641881311639e0243b7ed7ee.png",
      description: 'Perdagangan algoritmik (juga disebut perdagangan otomatis, perdagangan kotak hitam, atau perdagangan algo) menggunakan program komputer yang mengikuti serangkaian instruksi (algoritma) yang ditentukan untuk melakukan perdagangan. Perdagangan, secara teori, dapat menghasilkan keuntungan dengan kecepatan dan frekuensi yang tidak mungkin dilakukan oleh seorang pedagang manusia.',
    },
  ]
  return (
    <VStack w={'90%'} mx={'auto'} >
      <Center py={'30px'}>
        <Heading>Client Kami</Heading>
      </Center>
      {load ?
        <Flex gap={20} justifyContent={'center'} >
          {menu.slice(0, 3).map((item, index) => (
            <Box w={'20%'} key={index} boxShadow={'md'}>
              <Center >
                <Image src={item.image} />
              </Center>
              <Box p={'10px'}>
                <Heading py={'15px'} size={'lg'}>{item.title}</Heading>
                <Text noOfLines={10}>{item.description}</Text>
              </Box>
            </Box>

          ))}
        </Flex> :
        <Flex gap={20} justifyContent={'center'} flexWrap={'wrap'} >
          {menu.map((item, index) => (
            <Box w={'20%'} key={index} boxShadow={'md'}>
              <Center >
                <Image src={item.image} />
              </Center>
              <Box p={'10px'}>
                <Heading py={'15px'} size={'lg'}>{item.title}</Heading>
                <Text noOfLines={10}>{item.description}</Text>
              </Box>
            </Box>

          ))}
        </Flex>
      }

      <Box py={'30px'}>
        {load ?
          <Button fontSize={'20px'} bg={'transparent'} _hover={{ bg: "transparent", boxShadow: "lg" }} onClick={() => setLoad(false)}>Load More</Button> :
          <Button fontSize={'20px'} bg={'transparent'} onClick={() => setLoad(true)}>Brief</Button>
        }

      </Box>

    </VStack>
  )
}