import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import image1 from '../../../assets/images/Group 3088.png'
import image2 from '../../../assets/images/Group 3087 .png'
import image3 from '../../../assets/images/Group 3086.png'
import { ButtonJoinUs } from "../../../components/Button";

export default function Keunggulan() {
    return (
        <VStack w={'90%'} mx={'auto'} spacing={50} >
            <Box w="95%" >
                <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '50px' }} >Deoapp Finance dirancang sedemikian rupa dengan teknologi mutahir dan berbagai macam keistimewaan seperti:</Heading>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image1} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '1%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Desain Aplikasi yang simple dan menarik</Heading>
                        <Text mt={'20px'} >Deoapp Finance hadir dengan tampilan simple dan menarik yang di buat khusus untuk mengelola keuangan bisnis kamu tanpa perlu pengalaman atau latar studi khusus sehingga semua pebisnis mampu mengelola keuangan bisnisnya dengan mudah dan menyenangkan</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Berbagai Fitur yang praktis dan modern</Heading>
                        <Text mt={'20px'}>Dengan Deoapp Finance, kamu dapat menikmati berbagai fitur praktis dan modern yang memudahkan pekerjaanmu tanpa perlu repot mencatat secara manual menggunakan kertas dan pulpen. Melalui teknologi canggih, semua transaksi, pemasukan, pengeluaran, dan perkembangan keuanganmu akan teratur dan terorganisir dengan mudah melalui satu aplikasi yang praktis dan efisien.</Text>
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
                        <Heading>Perencanaan Keuangan yang lebih matang</Heading>
                        <Text mt={'20px'}>Deoapp Finance memungkinkan kamu untuk menentukan langkah bisnis selanjutnya mulai dari perkembangan produk hingga advertensi produk berdasarkan data yang telah disajikan sehingga kamu akan jauh lebih mudah dalam mencapai tujuanmu tersebut.</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Keamanan Privasi data</Heading>
                        <Text mt={'20px'}>Deoapp Finance menempatkan keamanan dan privasi data sebagai prioritas. Aplikasi ini dilengkapi dengan fitur keamanan yang kuat untuk melindungi informasi keuangan bisnismu.</Text>
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
                        <Heading>Akses mudah dan fleksibel</Heading>
                        <Text mt={'20px'}>Bayangkan, dengan menggunakan perangkat kamu miliki,kamu dengan mudah melacak semua pendapatanmu, mengontrol pengeluaranmu, dan memantau kondisi keuangan bisnismu dimana saja dan kapan saja
                        </Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
        </VStack >
    )
}