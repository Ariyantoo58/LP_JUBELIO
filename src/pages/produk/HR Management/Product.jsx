import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    Image,
    useColorModeValue,
    Center,
    Link,
} from '@chakra-ui/react';
import image1 from '../../../assets/icons/customer-relationship-management.png'
import image2 from '../../../assets/icons/finance (1).png'
import image3 from '../../../assets/icons/online-recruitment.png'
import image5 from '../../../assets/icons/marketing-analysis-report.png'
import image6 from '../../../assets/icons/cash-register.png'
import image7 from '../../../assets/icons/project-management (2).png'
import image8 from '../../../assets/icons/social-management.png'
import { useState } from 'react';
import Finan from '../../../assets/images/Finance management.png'
import Finan2 from '../../../assets/images/human-resources.png'


const prod = [
    {
        title: 'CRM',
        icon: Finan,
        desc: 'Jangan khawatir! Serahkan pada DeoApp HR Management untuk mengelola SDM Anda secara efisien dan menyenangkan, sehingga kinerjanya dapat dimaksimalkan.',
        color: '#EDDFBB',
        toggle: false
    },
    {
        title: 'Finance',
        icon: Finan2,
        desc: 'Dengan sistem yang telah kami rancang sedemikian rupa untuk memudahkanmu dalam memantau kualitas SDM-mu. Dalam waktu singkat, kamu akan merasakan kemudahan dalam menemukan bakat terpendam yang ada dalam tim SDM-mu',
        color: '#FADCDC',
        toggle: false
    }
]


export function Product() {

    const [more, setMore] = useState(false)
    const [data, setData] = useState(prod)

    const handleOff = (index) => {
        const OldProd = [...prod]
        OldProd[index].toggle = false
        setData(OldProd)
    }

    const handleOn = (index) => {
        const OldProd = [...prod]
        OldProd[index].toggle = true
        setData(OldProd)
    }


    return (
        <Stack w={'90%'} m={'auto'}>
            <Box >
                <Box pt={'4%'}>
                    <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '50px' }} mt={3} mb={3}>Ingin punya paltform SDM yang terorganisir?</Heading>
                </Box>
            </Box>

            <Stack align={'center'}>
                <Container maxW={'9xl'} mt={3}>
                    <Flex flexWrap="wrap" gap={{ base: 3, lg: 10 }} justifyContent={'center'}>

                        {data.map((produk, index) => (
                            <Stack
                                mb={10}
                                bgColor={produk.color}
                                maxW={{ base: 'full', md: '275px', lg: '370px' }}
                                w={'full'}
                                align={'center'}
                                borderRadius="lg"
                                overflow="hidden"
                                p={5}
                                key={index}>
                                <Stack align={'start'} spacing={2}>
                                    <Box w='30%'>
                                        <Image src={produk.icon} />
                                    </Box>
                                    <Box mt={1}>

                                        {produk.toggle ?
                                            <>
                                                <Text fontSize={'sm'} >{produk.desc}</Text>
                                                <Link onClick={() => handleOff(index)}>Lebih Sedikit</Link>
                                            </> : <>
                                                <Text fontSize={'sm'} noOfLines={3}>{produk.desc}</Text>
                                                <Link onClick={() => handleOn(index)}>Lihat Selengkapnya</Link>
                                            </>
                                        }
                                    </Box>

                                </Stack>
                            </Stack>

                        ))}

                    </Flex>
                </Container>

            </Stack>
        </Stack>
    )
}
