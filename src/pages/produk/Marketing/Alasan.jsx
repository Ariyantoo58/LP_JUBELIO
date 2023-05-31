import { Box, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import gambar from '../../../assets/icon baru/marketing-analysis.png'
import { FaCheckCircle } from "react-icons/fa";
import check from '../../../assets/images/check.png'

export default function Alasan() {
    return (
        <Stack align={'center'} w={'90%'} mx={'auto'} >
            <Stack mt={10} mb={10} >
                <Heading fontFamily={'sans-serif'} fontSize={{ base: '40px', lg: "50px" }} >Apakah kamu ? </Heading>
            </Stack>
            <HStack display={'flex'} flexDirection={{ base: 'column', lg: 'row' }} w={{ base: '100%', lg: '90%' }} m={'auto'}>
                <Box w={{ base: '100%', lg: '45%' }}>
                    <Image w={{ base: '100%', lg: '80%' }} paddingBottom={'5%'} src={gambar} />
                </Box>
                <Box w={{ base: '100%', lg: '55%' }}>
                    <HStack gap={2} mb={5}>
                        <Image w={'10%'} src={check} />
                        <Stack w={'80%'}>
                            <Text fontWeight={'bold'}>Sudah punya bisnis tapi stuck di tempat</Text>


                        </Stack>
                    </HStack>
                    <HStack gap={2} mb={5}>
                        <Image w={'10%'} src={check} />
                        <Stack w={'80%'}>
                            <Text fontWeight={'bold'}>Bangun Eksistensi Online yang Kuat </Text>

                        </Stack>
                    </HStack>
                    <HStack gap={2} mb={5}>
                        <Image w={'10%'} src={check} />
                        <Stack w={'80%'}>
                            <Text fontWeight={'bold'}>Mau meningkatkan penghasilan untuk bisnis kamu </Text>


                        </Stack>
                    </HStack>
                    <HStack gap={2} mb={5}>
                        <Image w={'10%'} src={check} />
                        <Stack w={'80%'}>
                            <Text fontWeight={'bold'}>Nggak tahu strategi marketing apa yang tepat untuk bisnis kamu</Text>


                        </Stack>
                    </HStack>
                    <HStack gap={2} mb={5}>
                        <Image w={'10%'} src={check} />
                        <Stack w={'80%'}>
                            <Text fontWeight={'bold'}>Pernah kerjasama dengan digital agency, tapi nggak ada perubahan</Text>


                        </Stack>
                    </HStack>
                    <HStack gap={2} mb={5}>
                        <Image w={'10%'} src={check} />
                        <Stack w={'80%'}>
                            <Text fontWeight={'bold'}>Bingung gimana cara manage sosial media untuk bisnis atau personal branding kamu sendiri.</Text>


                        </Stack>
                    </HStack>
                </Box>
            </HStack>
        </Stack>
    )
}