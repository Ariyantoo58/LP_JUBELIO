import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import image1 from '../../assets/images/Group 3074 .png'
import image2 from '../../assets/images/Group 3073 .png'
import image3 from '../../assets/images/Group 3072 .png'
import image4 from '../../assets/images/Group 3071 .png'

export default function Keunggulan() {
    return (
        <VStack w={'90%'} mx={'auto'} spacing={50} >
            <Box w="100%" >
                <Heading fontFamily={'sans-serif'} fontSize={'50px'} >Keunggulan Deoapp:</Heading>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image1} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '4%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading> Pengalaman Pengguna yang Ramah</Heading>
                        <Text mt={'20px'} >Desain antarmuka yang intuitif dan mudah digunakan, sehingga kamu bisa fokus pada pertumbuhan bisnis atau kariermu tanpa hambatan.</Text>
                        <Button _hover={{ bg: "#F83C09" }} fontSize={'20px'} color={'white'} w={'25%'} h={'50px'} bg={"#24D467"} mt={'20px'}>Join Us</Button>
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '6%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Produktivitas yang Meningkat:</Heading>
                        <Text mt={'20px'}>Automatisasi tugas-tugas rutin dan pengelolaan yang efisien membantu mengoptimalkan waktu dan usaha yang kamu investasikan.</Text>
                        <Button _hover={{ bg: "#F83C09" }} fontSize={'20px'} color={'white'} w={'25%'} h={'50px'} bg={"#24D467"} mt={'20px'}>Join Us</Button>
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
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '5%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading> Pengalaman Pengguna yang Ramah</Heading>
                        <Text mt={'20px'}>Desain antarmuka yang intuitif dan mudah digunakan, sehingga kamu bisa fokus pada pertumbuhan bisnis atau kariermu tanpa hambatan.</Text>
                        <Button _hover={{ bg: "#F83C09" }} fontSize={'20px'} color={'white'} w={'25%'} h={'50px'} bg={"#24D467"} mt={'20px'}>Join Us</Button>
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '4%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Dukungan Pelanggan yang Responsif</Heading>
                        <Text mt={'20px'}>Tim support kami siap membantu dan menjawab pertanyaanmu sepanjang waktu. Kami berkomitmen untuk memberikan pelayanan terbaik kepada pengguna DeoApp.</Text>
                        <Button _hover={{ bg: "#F83C09" }} fontSize={'20px'} color={'white'} w={'25%'} h={'50px'} bg={"#24D467"} mt={'20px'}>Join Us</Button>
                    </Box>
                    <Box flex={1} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image4} w={'100%'} />
                    </Box>
                </Flex>
            </Box>


        </VStack >
    )
}