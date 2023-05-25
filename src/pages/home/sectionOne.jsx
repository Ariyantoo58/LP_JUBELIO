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
  Center,
  Link,
} from '@chakra-ui/react';

import image1 from '../../assets/icons/customer-relationship-management.png'
import image2 from '../../assets/icons/finance (1).png'
import image3 from '../../assets/icons/online-recruitment.png'
import image5 from '../../assets/icons/marketing-analysis-report.png'
import image6 from '../../assets/icons/cash-register.png'
import image7 from '../../assets/icons/project-management (2).png'
import image8 from '../../assets/icons/social-management.png'
import { useState } from 'react';


function SectionOne() {

  const [more, setMore] = useState(false)
  const [paragraph, setParagraph] = useState(false)
  const [num, setNum] = useState()

  const handleOff = (produk) => {

    setNum(produk)
    console.log(num, 'ini ye')
    setParagraph(false)
  }
  const handleOn = (produk) => {
    setNum(produk)
    console.log(num, 'ini loh')
    setParagraph(true)
  }

  const prod = [
    {
      title: 'CRM',
      icon: image1,
      desc: 'Manajemen Pelanggan yang Terpercaya: Bangun hubungan yang kuat dengan pelanggan menggunakan sistem CRM kami. Pantau interaksi pelanggan, pelacakan pesanan, dan berikan layanan pelanggan yang personal. Dengan data pelanggan yang terpusat, kamu dapat memberikan pengalaman yang unik, meningkatkan retensi pelanggan, dan mendorong pertumbuhan bisnis.',
      color: '#EDDFBB'
    },
    {
      title: 'Finance',
      icon: image2,
      desc: 'Sistem Keuangan yang Gak Bikin Pusing: Makin gampang dan rapih deh urusan keuanganmu! DeoApp bantu kamu lacak pendapatan, pengeluaran, dan laporan keuangan dengan mudah dan akurat. Ada grafik keren dan analisis pintar yang bisa bantu kamu ambil keputusan jitu buat bikin bisnismu makin maju!',
      color: '#FADCDC'
    },
    {
      title: 'HR Management',
      icon: image3,
      desc: 'HR Management System SUPER Efisien: Biar timmu tetap on fire, DeoApp punya fitur HR yang bikin semuanya jadi simpel dan efisien. Jadwal, absensi, dan kinerja tim? Santai aja, semuanya bisa diatur dengan mudah. Dapet Analisis kinerja, dan project management yang oke banget buat raih tujuan bareng!',
      color: '#E7F5B9'
    },
    {
      title: 'Marketing',
      icon: image5,
      desc: 'Sistem Pemasaran yang Efektif: DeoApp memberikanmu alat canggih untuk merancang dan meluncurkan kampanye pemasaran yang sukses. Dengan fitur segmentasi target audiens yang lengkap, analisis data yang mendalam, dan pelacakan konversi, kamu dapat mengoptimalkan strategi pemasaranmu untuk hasil yang maksimal. Buat brand awareness, tingkatkan penjualan, dan bangun loyalitas pelanggan.',
      color: '#EAB3A7'
    },
    {
      title: 'Poin of Sale',
      icon: image6,
      desc: 'Point of Sale (POS) yang Praktis: Tambahkan kemudahan dalam bisnis ritelmu dengan fitur POS DeoApp. Kelola inventaris, proses transaksi pembayaran dengan cepat, dan pantau penjualan secara real-time. Dapatkan laporan penjualan terperinci dan analisis yang membantu kamu mengoptimalkan performa bisnis ritelmu.',
      color: '#C9CBEF'
    },
    {
      title: 'Project Management',
      icon: image7,
      desc: '',
      color: '#D8E1BC'
    },
    {
      title: 'Social Media Management',
      icon: image8,
      desc: 'Pengelolaan Media Sosial yang Terstruktur: Jadilah ahli media sosial dengan DeoApp. Kelola dan jadwalkan postingan dengan mudah, pantau performa konten dengan statistik yang lengkap, dan terhubung dengan pengikutmu. Buat kehadiranmu di dunia digital semakin berdampak dan sukses!',
      color: '#FEECD6'
    },
  ]

  return (
    <Stack w={'90%'} m={'auto'}>
      <Box >
        <Box pt={'3%'}>
          <Heading fontFamily={'sans-serif'} fontSize={'50px'} mt={3} mb={3}>Deoapp Product</Heading>
        </Box>
      </Box>

      <Stack align={'center'}>
        <Container maxW={'7xl'} mt={3}>
          <Flex flexWrap="wrap" gap={3} justifyContent={'center'}>
            {more ?
              <>
                {prod.map((produk, index) => (
                  <Stack
                    bgColor={produk.color}
                    maxW={{ base: 'full', md: '275px', lg: '370px' }}
                    w={'full'}
                    align={'center'}
                    borderRadius="lg"
                    overflow="hidden"
                    p={5}
                    key={index}>
                    <Stack align={'start'} spacing={2}>
                      <Box w='30%'>
                        <Image src={produk.icon} />
                      </Box>
                      <Box mt={1}>
                        <Heading size="md" h={'5vh'}>{produk.title}</Heading>
                        {paragraph ?
                          <>

                            <Text fontSize={'sm'} >{produk.desc}</Text>
                            <Link onClick={() => handleOff(index)}>Lebih Sedikit</Link>
                          </> : <>
                            <Text fontSize={'sm'} noOfLines={3}>{produk.desc}</Text>
                            <Link onClick={() => handleOn(index)}>Lihat Selengkapnya</Link>
                          </>
                        }
                      </Box>
                      <Button colorScheme={produk.color} size={'sm'} border={'1px solid black'} textColor={'black'}>
                        Cek Fitur
                      </Button>
                    </Stack>
                  </Stack>

                ))}
              </>
              :
              <>
                {prod.slice(0, 3).map((produk, index) => (
                  <Stack
                    bgColor={produk.color}
                    maxW={{ base: 'full', md: '275px', lg: '370px' }}
                    w={'full'}
                    align={'center'}
                    borderRadius="lg"
                    overflow="hidden"
                    p={5}
                    key={index}>
                    <Stack align={'start'} spacing={2}>
                      <Box w='30%'>
                        <Image src={produk.icon} />
                      </Box>
                      <Box mt={1}>
                        <Heading size="md" h={'5vh'}>{produk.title}</Heading>
                        {paragraph ?
                          <>
                            <Text fontSize={'sm'} >{produk.desc}</Text>
                            <Link onClick={() => handleOff(produk)}>Lebih Sedikit</Link>
                          </> : <>
                            <Text fontSize={'sm'} noOfLines={3}>{produk.desc}</Text>
                            <Link onClick={() => handleOn(produk)}>Lihat Selengkapnya</Link>
                          </>
                        }
                      </Box>
                      <Button colorScheme={produk.color} size={'sm'} border={'1px solid black'} textColor={'black'}>
                        Cek Fitur
                      </Button>
                    </Stack>
                  </Stack>
                ))}
              </>}

          </Flex>
          <Stack align={'center'} mt={5} mb={5}>
            {more ?
              <>
                <Button colorScheme='white' textColor={'black'} boxShadow={'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'} onClick={() => setMore(false)}>Tutup</Button>
              </> : <>
                <Button colorScheme='white' textColor={'black'} boxShadow={'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'} onClick={() => setMore(true)}>Selengkapnya</Button>
              </>
            }
          </Stack >
        </Container>

      </Stack>
    </Stack>
  )
}
export default SectionOne