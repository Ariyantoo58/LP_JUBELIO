import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import image1 from '../../../assets/thumbnail/Group 3135.png'
import image2 from '../../../assets/thumbnail/Group 3136.png'
import image3 from '../../../assets/thumbnail/Group 3137.png'
import { ButtonJoinUs } from "../../../components/Button";

export default function Keunggulan() {
    return (
        <VStack w={'90%'} mx={'auto'} spacing={50} >
            <Box w="100%" >
                <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '50px' }} >keunggulan Deoapp Marketing</Heading>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image1} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '1%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Penyajian platform yang modern dan ekslusif</Heading>
                        <Text mt={'20px'} >Deoapp marketing dibangun dengan sistem yang ekslusif yang mampu membantumu dalam melihat perkembangan iklan produkmu sehingga kamu dapat menentukan rencana bisnismu dengan mudah</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Tidak perlu memakan waktu yang lama untuk beriklan</Heading>
                        <Text mt={'20px'}>Dengan deoapp marketing, kamu tak perlu ribet ngurus iklan</Text>
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
                        <Heading>Team yang professional dan Berpengalaman.</Heading>
                        <Text mt={'20px'}>Deoapp marketing memiliki team yang professional dan telah membantu para customer dalam meningkatkan prospek dalam berbagai macam bisnis melalui teknologi digital</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
        </VStack >
    )
}