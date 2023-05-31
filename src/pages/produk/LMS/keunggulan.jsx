import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import image1 from '../../../assets/images/Group 3088.png'
import image2 from '../../../assets/images/Group 3087 .png'
import image3 from '../../../assets/images/Group 3086.png'
import { ButtonJoinUs } from "../../../components/Button";

export default function Keunggulan() {
    return (
        <VStack w={'90%'} mx={'auto'} spacing={50} >
            <Box w="100%" >
                <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '50px' }} >Dengan keunggulan yang dimiliki oleh deoapp LMS kamu  akan memperoleh : </Heading>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image1} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '1%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Dukungan pembuatan materi</Heading>
                        <Text mt={'20px'} >Kami akan membantu mengurus seluruh proses produksi materi sehingga kamu hanya perlu mempersiapkan materi apa yang ingin kamu buat, untuk persiapan dan eksekusinya akan dibantu oleh tim professional kami</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Dukungan proses produksi hingga distribusi</Heading>
                        <Text mt={'20px'}>Deoapp LMS hadir memberikan bantuan penuh mulai dari produksi hingga distribusi materimu. Kami akan memastikan semua tahap proses berjalan lancar dan efisien. Dengan Team yang professional kami akan mengelola dan mengoptimalkan video mu</Text>
                        <ButtonJoinUs />
                    </Box>
                    <Box flex={1} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image2} w={'100%'} />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '60px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}>
                        <Image src={image3} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Reporting Hasil Penjualan Produk dan Data Statistik di yang up todate</Heading>
                        <Text mt={'20px'}>Kami akan menyajikan laporan penjualan produk dan data statistik terbaru sehingga kamu dapat dengan mudah melacak performa produk Anda Dengan akses ke data yang akurat dan terbaru, Anda dapat mengidentifikasi tren pasar, menyesuaikan strategi, dan membuat keputusan yang lebih cerdas</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
        </VStack >
    )
}