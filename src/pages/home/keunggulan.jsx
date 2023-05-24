import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import image1 from '../../assets/images/Group 3074.png'
import image2 from '../../assets/images/Group 3073.png'
import image3 from '../../assets/images/Group 3072.png'
import image4 from '../../assets/images/Group 3071.png'

export default function Keunggulan() {
    return (
        <VStack w={'90%'} mx={'auto'} spacing={'20px'} my={'50px'}>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '60px' }} flexWrap={'wrap'} >
                    <Box w={{ base: "90%", lg: "45%" }} mx={'auto'}>
                        <Image src={image1} />
                    </Box>
                    <Box py={{ base: '10px', lg: '60px' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}>
                        <Heading> Pengalaman Pengguna yang Ramah</Heading>
                        <Text mt={'20px'}>Desain antarmuka yang intuitif dan mudah digunakan, sehingga kamu bisa fokus pada pertumbuhan bisnis atau kariermu tanpa hambatan.</Text>
                        <Button color={'white'} bg={'blue'} mt={'20px'}>Start free trial</Button>
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '60px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box py={{ base: '10px', lg: '60px' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Produktivitas yang Meningkat:</Heading>
                        <Text mt={'20px'}>Automatisasi tugas-tugas rutin dan pengelolaan yang efisien membantu mengoptimalkan waktu dan usaha yang kamu investasikan.</Text>
                        <Button color={'white'} bg={'blue'} mt={'20px'}>Start free trial</Button>
                    </Box>
                    <Box w={{ base: "90%", lg: "45%" }} mx={'auto'}  >
                        <Image src={image2} />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '60px' }} flexWrap={'wrap'} >
                    <Box w={{ base: "90%", lg: "45%" }} mx={'auto'}>
                        <Image src={image3} />
                    </Box>
                    <Box py={{ base: '10px', lg: '60px' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}>
                        <Heading> Pengalaman Pengguna yang Ramah</Heading>
                        <Text mt={'20px'}>Desain antarmuka yang intuitif dan mudah digunakan, sehingga kamu bisa fokus pada pertumbuhan bisnis atau kariermu tanpa hambatan.</Text>
                        <Button color={'white'} bg={'blue'} mt={'20px'}>Start free trial</Button>
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '60px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box py={{ base: '10px', lg: '60px' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Dukungan Pelanggan yang Responsif</Heading>
                        <Text mt={'20px'}>Tim support kami siap membantu dan menjawab pertanyaanmu sepanjang waktu. Kami berkomitmen untuk memberikan pelayanan terbaik kepada pengguna DeoApp.</Text>
                        <Button color={'white'} bg={'blue'} mt={'20px'}>Start free trial</Button>
                    </Box>
                    <Box w={{ base: "90%", lg: "45%" }} mx={'auto'}  >
                        <Image src={image4} />
                    </Box>
                </Flex>
            </Box>


        </VStack>
    )
}