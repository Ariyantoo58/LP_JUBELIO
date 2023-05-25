import { Box, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import gambar from '../../assets/images/confused-woman.png' 
import { FaCheckCircle } from "react-icons/fa";
import check from '../../assets/images/check.png'

export default function SectionSix () {
    return (
        <Stack align={'center'}>
            <Stack mt={10} mb={10}>
                <Heading>Kenapa Harus DeoApp?</Heading>
            </Stack>
            <HStack display={'flex'} flexDirection={{base:'column', lg:'row'}} w={{base: '100%',lg:'90%'}} m={'auto'}>
                <Box w={{base: '100%',lg: '45%'}}>
                    <Image w={{base: '100%', lg:'80%'}} paddingBottom={'5%'} src={gambar}/>
                </Box>
                <Box w={{base:'100%', lg:'55%'}}>
                    <HStack gap={2} mb={5}>
                        <Image w={'10%'} src={check}/>
                        <Stack w={'100%'}>
                            <Text fontWeight={'bold'}>Tingkatkan Produktivitas Tim: </Text>
                            <Text fontSize={'11pt'}>
                            Dengan fitur-fitur yang lengkap dan kemudahan penggunaan DeoApp, kamu bisa menghemat waktu dan energi untuk fokus pada pertumbuhan bisnis atau kariermu.
                            </Text>

                        </Stack>
                    </HStack>
                    <HStack gap={2} mb={5}>
                        <Image w={'10%'} src={check}/>
                        <Stack w={'100%'}>
                            <Text fontWeight={'bold'}>Bangun Eksistensi Online yang Kuat: </Text>
                            <Text fontSize={'11pt'}>
                            Manfaatkan fitur media sosial, pemasaran, dan ecourse kami untuk membangun brand awareness, menjangkau target audiens yang lebih luas, dan menarik lebih banyak pelanggan.
                            </Text>

                        </Stack>
                    </HStack>
                    <HStack gap={2} mb={5}>
                        <Image w={'10%'} src={check}/>
                        <Stack w={'100%'}>
                            <Text fontWeight={'bold'}>Dapatkan Wawasan dari Para Ahli:  </Text>
                            <Text fontSize={'11pt'}>
                            Program masterclass kami memberikanmu akses ke pengusaha sukses, professional berpengalaman, dan influencer terkenal yang siap berbagi pengetahuan dan strategi terbaik untuk membantu kamu mencapai kesuksesan.
                            </Text>

                        </Stack>
                    </HStack>
                    <HStack gap={2} mb={5}>
                        <Image w={'10%'} src={check}/>
                        <Stack w={'100%'}>
                            <Text fontWeight={'bold'}>Kembangkan Bisnis atau Kariermu dengan Cepat: </Text>
                            <Text fontSize={'11pt'}>
                            DeoApp menyediakan semua alat yang kamu butuhkan untuk mengelola, mengembangkan, dan mengoptimalkan bisnis atau kariermu dengan JAUH LEBIH cepat dan efektif.
                            </Text>

                        </Stack>
                    </HStack>
                </Box>
            </HStack>
        </Stack>
    )
}