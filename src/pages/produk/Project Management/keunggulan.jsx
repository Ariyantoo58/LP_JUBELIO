import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import image1 from '../../../assets/thumbnail/Group 3144.png'
import image2 from '../../../assets/thumbnail/Group 3145.png'
import image3 from '../../../assets/thumbnail/Group 3146.png'
import image4 from '../../../assets/thumbnail/Group 3147.png'
import { ButtonJoinUs } from "../../../components/Button";

export default function Keunggulan() {
    return (
        <VStack w={'90%'} mx={'auto'} spacing={50} >
            <Box w="100%" >
                <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '50px' }} >Keunggulan Project Menejemen</Heading>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image1} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '1%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Pelacakan Proyek yang Akurat: </Heading>
                        <Text mt={'20px'} >Pantau setiap aspek proyekmu, termasuk jadwal, anggaran, dan sumber daya yang terlibat. Dengan visualisasi grafis yang intuitif, kamu dapat dengan cepat melihat status proyek secara keseluruhan dan mengidentifikasi area yang membutuhkan perhatian.</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Kolaborasi yang Efektif:</Heading>
                        <Text mt={'20px'}>Tim kamu adalah aset berharga, dan kami memahami betapa pentingnya kolaborasi yang lancar. Dengan fitur kolaborasi kami yang canggih, kamu dapat mengundang anggota tim, mengatur tanggung jawab, dan berbagi file dengan mudah. Pembaruan proyek secara real-time memastikan bahwa semua orang selalu berada di jalur yang sama.</Text>
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
                        <Heading>Pemberitahuan yang Dipersonalisasi:</Heading>
                        <Text mt={'20px'}>Jangan sampai terlewatkan satu pun detail penting. Kami memberikan pemberitahuan yang dipersonalisasi melalui email atau notifikasi aplikasi, sehinggakamu tetap terinformasi tentang perubahan penting, tenggat waktu yang mendekat, dan peristiwa proyek lainnya.</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Analisis yang Mendalam</Heading>
                        <Text mt={'20px'}>Dengan alat analisis kami, kamu dapat melacak kinerja proyek, memantau metrik kunci, dan menganalisis tren untuk membuat perbaikan yang diperlukan dan mengoptimalkan prosesmu.</Text>
                        <ButtonJoinUs />
                    </Box>
                    <Box flex={1} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image4} w={'100%'} />
                    </Box>
                </Flex>
            </Box>
        </VStack >
    )
}