import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import image1 from '../../../assets/images/Group 3088.png'
import image2 from '../../../assets/images/Group 3087 .png'
import image3 from '../../../assets/images/Group 3086.png'
import { ButtonJoinUs } from "../../../components/Button";

export default function Keunggulan() {
    return (
        <VStack w={'90%'} mx={'auto'} spacing={50} >
            <Box >
                <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '40px' }} >Melalui Deoapp HR management kamu akan menemukan berbagai keunggulan yang luar biasa seperti</Heading>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image1} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '1%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Waktu yang lebih singkat</Heading>
                        <Text mt={'20px'} >dengan proses yang praktis Proses manual yang rumit dan lama dapat digantikan dengan sistem online yang efisien, menghemat waktu berhargamu.
                        </Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Efisiensi tinggi</Heading>
                        <Text mt={'20px'}>beserta informasi yang up to date
                            Platform kami memberikan solusi bagi HR yang mampu memudahkanmu dalam mengelola informasi karyawan, mengoptimalkan proses penggajian, dan mengawasi cuti dan absensi dengan cepat dan mudah.</Text>
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
                        <Heading>Keakuratan Data</Heading>
                        <Text mt={'20px'}>Sederhanakan pengelolaan HR perusahaan Anda dengan Deoapp HR Management. Kami hadir dengan sistem terbaik yang menawarkan penyimpanan data yang terpusat dan aman. Dapatkan keakuratan dan kekonsistenan informasi yang disampaikan oleh tim HR, dan kamu akan menghindari kesalahan dalam perekapan daya</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Aksesibilitas dari Mana Saja</Heading>
                        <Text mt={'20px'}>Nikmati kemudahan mengakses platform HR kami kapan pun dan di mana pun Anda berada, melalui perangkat apapun dengan koneksi internet.</Text>
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
                        <Heading>Aksebilitas yang mudah dan cepat </Heading>
                        <Text mt={'20px'}>untuk Daily Work mu
                            Keterampilan harianmu dapat dengan mudah terhubung melalui satu platform yang memudahkan pemangku kepentingan untuk mengetahui kemajuanmu segera.
                        </Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
        </VStack >
    )
}