import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import image1 from '../../../assets/images/Group 3088.png'
import image2 from '../../../assets/images/Group 3087 .png'
import image3 from '../../../assets/images/Group 3086.png'
import { ButtonJoinUs } from "../../../components/Button";

export default function Keunggulan() {
    return (
        <VStack w={'90%'} mx={'auto'} spacing={50} >
            <Box w="100%" >
                <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '50px' }} >Kenapa memilih Deoapp LMS?</Heading>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image1} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '1%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Akses yang sangat terjangkau dimanapun dan kapanpun</Heading>
                        <Text mt={'20px'} >Akses learning kami dirancang se-fleksibel mungkin untuk mengikuti gaya hidup modern dan waktu sibuk mu dengan fleksibilitas waktu dan akses online yang mudah, Anda dapat mengakses di mana saja, kapan saja, dan dari perangkat apa pun yang kamu miliki. Ini adalah kesempatan sempurna untuk mengembangkan dirimu tanpa harus meninggalkan kenyamanan mu</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Konten yang sa edukatif dan dirancang se ekslusif mungkin</Heading>
                        <Text mt={'20px'}>kami menghadirkan pengalaman learning  interaktif dengan video edukasi menarik dan materi yang terstruktur. Anda akan memperoleh edukasi dengan kecepatan Anda sendiri mulai dari produk knowlegde, mengelola SDM, memasarkan produk dan banyak lagi yang mampu mengembangkan potensimu dalam berbisnis</Text>
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
                        <Heading>Mentor yang professional dan terkemuka se indonesia</Heading>
                        <Text mt={'20px'}>Kami sangat bangga bahwa Course kami didukung oleh para public figure terkemuka se Indonesia yang penuh gairah dan profesionalisme. Mereka siap membimbingmu dengan panduan, umpan balik konstruktif, dan wawasan berharga berdasarkan pengalaman lapangan mereka. Dengan keahlian mereka sebagai sumber inspirasi, Anda akan merasa didukung sepenuhnya dalam mencapai kemajuan yang signifikan menuju kesuksesan</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>


        </VStack >
    )
}