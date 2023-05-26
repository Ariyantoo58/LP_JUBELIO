import { Button, Flex, Heading, VStack, Box, Center, Text, HStack, Image, Icon, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import Gambar2 from '../../../assets/images/Finance Growth.png'
import Gambar1 from '../../../assets/images/Group.png'
import minus from '../../../assets/logo/minus.png'
import plus from '../../..//assets/icons/plus.png'
import { HiPlusCircle } from "react-icons/hi";

export default function Keuntungan() {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });
    const [change, setChange] = useState(false)


    return (
        <Box w={'90%'} m={'auto'} my={30} py={{ base: 0, lg: 30 }} >
            <VStack spacing={30}>
                <Heading>Apa untungnya pakai DeoApp LMS?</Heading>
                <Text>Memudahkan kamu untuk belajar</Text>
                {isDesktop ?
                    <Flex p={3} borderRadius={10} w={'50%'} justifyContent={'center'} gap={10}>
                        <Button bg={'#f7580a'} color={'white'} onClick={() => setChange(true)}>Tanpa Deoapp LMS</Button>
                        <Button color={'#f7580a'} bg={'white'} border={'1px solid #f7580a'} onClick={() => setChange(false)}>Dengan Deoapp LMS</Button>
                    </Flex> : <Flex p={3} borderRadius={10} w={'50%'} justifyContent={'center'} gap={10}>
                        {change ? <Button w={200} color={'#f7580a'} bg={'white'} border={'1px solid #f7580a'} onClick={() => setChange(false)}> Deoapp LMS</Button> : <Button w={200} bg={'#f7580a'} color={'white'} onClick={() => setChange(true)}>Tanpa Deoapp LMS</Button>}
                    </Flex>
                }

                <Box >
                    {change ?
                        <Flex flexWrap={'wrap'} >
                            <Center w={{ base: '80%', lg: '50%' }} >
                                <Image ml={100} w={"80%"} src={Gambar1} />
                            </Center>
                            <Center w={{ base: '100%', lg: '50%' }} >
                                <Stack spacing={5} px={{ base: 2, lg: 0 }}>
                                    <HStack spacing={10}>
                                        <Image w={25} src={minus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Pengalaman Belajar yang Interaktif</Text>
                                    </HStack>
                                    <HStack spacing={10}>
                                        <Image w={25} src={minus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Fleksibilitas</Text>
                                    </HStack>
                                    <HStack spacing={10}>
                                        <Image w={25} src={minus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Bahan Pembelajaran yang Kaya</Text>
                                    </HStack>
                                    <HStack spacing={10}>
                                        <Image w={25} src={minus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Dukungan Pengajar yang Profesional</Text>
                                    </HStack>
                                    <HStack spacing={10}>
                                        <Image w={25} src={minus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Pembelajaran yang Dipersonalisasi</Text>
                                    </HStack>
                                    <HStack spacing={10}>
                                        <Image w={25} src={minus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Dukungan dan Bimbingan yang Tak Terbatas</Text>
                                    </HStack>
                                </Stack>
                            </Center>
                        </Flex> :
                        <Flex flexWrap={'wrap'}>
                            <Center w={{ base: '90%', lg: '50%' }} >
                                <Image ml={30} w={"100%"} src={Gambar2} />
                            </Center>
                            <Center w={{ base: '100%', lg: '50%' }} >
                                <Stack spacing={{ base: 1, lg: 5 }} px={{ base: 2, lg: 0 }}>
                                    <HStack spacing={10}>
                                        <Image w={25} src={plus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Kesulitan dalam Mengelola Konten</Text>
                                    </HStack>
                                    <HStack spacing={10}>
                                        <Image w={25} src={plus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Tantangan dalam Pengorganisasian Kursus</Text>
                                    </HStack>
                                    <HStack spacing={10}>
                                        <Image w={25} src={plus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Kurangnya Kolaborasi dan Interaksi</Text>
                                    </HStack>
                                    <HStack spacing={10}>
                                        <Image w={25} src={plus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Tidak Adanya Analisis Data</Text>
                                    </HStack>
                                    <HStack spacing={10}>
                                        <Image w={25} src={plus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Kurangnya Sentralisasi</Text>
                                    </HStack>
                                    <HStack spacing={10}>
                                        <Image w={25} src={plus} />
                                        <Text fontSize={25} fontFamily={'inherit'}>Dukungan dan Bimbingan yang Tak Terbatas</Text>
                                    </HStack>
                                </Stack>
                            </Center>
                        </Flex>

                    }
                </Box>

            </VStack>

        </Box>
    )
}