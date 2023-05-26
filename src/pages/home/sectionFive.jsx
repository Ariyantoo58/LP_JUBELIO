import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Center,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';


export const Portofolio = () => {
  const [load, setLoad] = useState(true)
  const menu = [
    {
      title: "Project",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/6418d71fecb0dd9f219c8910.png",
      description: 'Project Management seperti aplikasi web untuk digunakan organisasi berdasarkan model SCRUM dengan papan kanban sebagai fitur utama Dan Platform Ini Juga berfungsi untuk melakukan absensi karyawan yang telah dilengkapi dengan fitur yang lengkap',
    },
    {
      title: "Entreperenurs",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/6418dc20ecb0ddd4cb9c8e01.png",
      description: 'Pengusaha adalah individu yang menciptakan, mengatur, dan mengelola bisnis atau perusahaan, mengambil risiko keuangan dalam mengejar keuntungan. Mereka sering dikaitkan dengan inovasi dan bersedia mengambil peluang bisnis baru atau memperkenalkan produk, layanan, atau model bisnis baru. Pengusaha dapat ditemukan di berbagai bidang, termasuk teknologi, keuangan, ritel, dan manufaktur, dan merupakan komponen penting dari ekonomi yang dinamis.',
    },
    {
      title: "Algotrading",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/641881311639e0243b7ed7ee.png",
      description: 'Perdagangan algoritmik (juga disebut perdagangan otomatis, perdagangan kotak hitam, atau perdagangan algo) menggunakan program komputer yang mengikuti serangkaian instruksi (algoritma) yang ditentukan untuk melakukan perdagangan. Perdagangan, secara teori, dapat menghasilkan keuntungan dengan kecepatan dan frekuensi yang tidak mungkin dilakukan oleh seorang pedagang manusia.',
    },
    {
      title: "Affiliate",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/642136ce04a5d522b8b6e916.png",
      description: 'Afiliasi adalah orang, perusahaan, atau organisasi yang secara resmi terhubung atau terkait dengan entitas lain (biasanya perusahaan atau organisasi yang lebih besar) dalam hubungan yang saling menguntungkan. Afiliasi ini sering melibatkan promosi, pemasaran, atau penjualan produk atau layanan dari entitas yang lebih besar dengan imbalan komisi atau kompensasi lainnya. Dalam konteks pemasaran online, afiliasi adalah seseorang yang mempromosikan produk atau layanan melalui program afiliasi, mendapatkan komisi atas setiap penjualan atau konversi yang dihasilkan.',
    },
    {
      title: "Brainology",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/64188605ecb0dd69a09c2db7.png",
      description: 'Brainology adalah aplikasi seluler yang bertujuan untuk meningkatkan keterampilan kognitif, memori, dan kemampuan pemecahan masalah pengguna. Aplikasi ini menggunakan teknik dan permainan yang terbukti secara ilmiah untuk melatih otak dan meningkatkan ketangkasan mental. Di blog ini, kita akan membahas fitur dan manfaat dari aplikasi Brainology.',
    },
    {
      title: "Dropship",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/6421381004a5d56114b6e95c.jpeg ",
      description: 'Bukan hanya para blogger yang tertarik pada hal yang luar biasa, begitu pula dengan orang-orang yang membaca blog.',
    },
    {
      title: "Intrapreneur",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/6418dd43ecb0dd02629c8ead.png",
      description: 'Intrapreneur adalah sebuah platform yang berfungsi sebagai titik pertemuan antara karyawan yang sedang mencari pekerjaan dengan perusahaan yang membutuhkan karyawan.Platform ini dilengkapi dengan berbagai jenis pembelajaran video, kualifikasi, pelatihan, dan lainnya.Intrapreneurship adalah konsep yang mengacu pada kegiatan kewirausahaan dalam sebuah organisasi yang sudah mapan.Intrapreneur adalah individu yang bekerja di dalam perusahaan namun berperilaku seperti seorang entrepreneur, mengambil risiko yang terukur dan mengembangkan ide- ide dan inovasi baru untuk keuntungan organisas',
    },
    {
      title: "Kitchen",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/64210ba904a5d56591b6ce09.jpeg",
      description: 'Smart Kitchen System adalah sebuah aplikasi yang memanfaatkan teknologi untuk membantu pengguna dalam mengelola kegiatan memasak dan memilih menu sehat dan bergizi. Dalam artikel ini, kita akan menggali lebih dalam mengenai fitur-fitur dan manfaat dari aplikasi inovatif ini.',
    },
    {
      title: "Cloud Kitchen",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/6418da3bd1f785c87a6ae699.jpeg",
      description: 'Cloud Khitchen adalah sebuah platform online yang dirancang khusus untuk membantu para pengusaha kuliner memasarkan bisnis mereka, sekaligus membantu konsumen menemukan resep-resep baru dan ide-ide memasak. Dengan fitur-fitur inovatif dan ramah pengguna, Khitchen dapat membantu Anda meningkatkan produktivitas dan kreativitas di dapur.',
    },
    {
      title: "Trading Syariah",
      image: "https://storage.googleapis.com/msgsndr/g5ixcUwLF94aB6ka3IVG/media/6418df4319849c91a198bd65.png",
      description: 'Jika Anda adalah seorang investor Muslim yang mencari pilihan investasi yang etis, perdagangan sesuai prinsip syariah merupakan cara yang sangat baik untuk menginvestasikan uang Anda dengan cara halal. Perdagangan sesuai prinsip syariah mengikuti prinsip-prinsip hukum Islam, yang melarang riba (bunga), gharar (ketidakpastian), dan maysir (perjudian). Prinsip-prinsip ini memastikan bahwa investasi Anda bersifat etis dan sesuai dengan keyakinan Anda.',
    },
  ]
  return (
    <VStack w={'90%'} mx={'auto'} >
      <Box py={'30px'} >
        <Heading fontFamily={'sans-serif'} fontSize={'50px'}>Client Kami</Heading>
      </Box>
      {load ?
        <Flex gap={20} justifyContent={'center'} flexWrap={'wrap'} >
          {menu.slice(0, 3).map((item, index) => (
            <Box w={{ base: "70%", lg: '23%' }} key={index} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
              <Center >
                <Image boxShadow={'lg'} src={item.image} />
              </Center>
              <Box p={'20px'}>
                <Heading py={'15px'} size={'lg'}>{item.title}</Heading>
                <Text noOfLines={10}>{item.description}</Text>
              </Box>
            </Box>

          ))}
        </Flex> :
        <Flex gap={20} justifyContent={'center'} flexWrap={'wrap'} >
          {menu.map((item, index) => (
            <Box w={{ base: "70%", lg: '23%' }} key={index} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
              <Center >
                <Image boxShadow={'lg'} src={item.image} />
              </Center>
              <Box p={'20px'}>
                <Heading py={'15px'} size={'lg'}>{item.title}</Heading>
                <Text noOfLines={10}>{item.description}</Text>
              </Box>
            </Box>

          ))}
        </Flex>
      }

      <Box py={'30px'}>
        {load ?
          <Button fontSize={'20px'} bg={'transparent'} _hover={{ bg: "transparent", boxShadow: "lg" }} onClick={() => setLoad(false)}>Lebih Banyak</Button> :
          <Button fontSize={'20px'} bg={'transparent'} _hover={{ bg: "transparent", boxShadow: "lg" }} onClick={() => setLoad(true)}>Lebih Sedikit</Button>
        }

      </Box>

    </VStack>
  )
}