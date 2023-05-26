import {
    Stack,
    Box,
    Heading,
    Text,
    Image,
    useBreakpointValue,
    VStack,
    HStack,
    Center,
    Flex,
    Button,
} from '@chakra-ui/react';

import ButtonStart from '../../../components/Button';
import AnimetedFinance from "../../../assets/background/Finance.gif"
import Bg from "../../../assets/background/bg Lms.jpeg"
import Logo from '../../../assets/logo/deoapp.png'
import image from '../../../assets/images/9.png'


import Keunggulan from './keunggulan';
import Keuntungan from './keuntungan';

export default function Finance() {

    return (
        <Box>
            <Box>
                <Main />
            </Box>
            <Box>
                <Bisnis />
            </Box>
            <Box my={100}>
                <Keunggulan />
            </Box>
            <Box>
                <Keuntungan />
            </Box>
            <Box bg={"#e1f0ff"}>
                <Fitur />
            </Box>
            <Box bg={"#F5FAFF"}>
                <Lainnya />
            </Box>

        </Box>

    )
}




export function Main() {

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });


    return (
        <Box bgSize={'cover'} bgImage={Bg} >
            {isDesktop ? <></> : <Stack w={'100%'}>
                <Image w={'80%'} m={'auto'} src={AnimetedFinance} />
            </Stack>}
            <Box maxW={'90%'} display={'flex'} flexDirection={['column-reverse', 'row', 'row']} m={'auto'} gap={10}>
                <Stack
                    w={'100%'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 20 }}
                    direction={{ base: 'column', md: 'row' }}>
                    <Stack flex={1} spacing={{ base: 5, md: 4 }}>
                        <Box >
                            <Image src={Logo} w={200} />
                        </Box>

                        <Heading
                            lineHeight={1}
                            fontWeight={500}
                            paddingBottom={10}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                            <Text fontSize={{ base: "35px", lg: '40px' }} as={'span'} color={'black'} fontFamily={'sans-serif'} fontWeight={'bold'}>
                                “Tingkatkan <Text as={'span'} color={'#F83C09'}>intelegensi</Text> dan raih kesuksesan bersama <Text as={'span'} color={'#F83C09'}>DEOAPP LMS, </Text>  Nikmati Kenyamatan dan Kemudahan akses learning bersama mentor terkemuka se- <Text as={'span'} color={'#F83C09'}>Indonesia</Text>”
                            </Text>
                        </Heading>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}>
                            <ButtonStart />
                        </Stack>
                    </Stack>
                </Stack>
                {isDesktop ? <Stack w={'80%'} >
                    <Image w={'100%'} m={'auto'} src={AnimetedFinance} />
                </Stack> : <></>}
            </Box>
        </Box>
    )
}



const FiturUnggulan = () => {
    const menu = [
        "Salin Produk", "Import Produk Massal", "Daftar Harga", "Buku Harga", "Import Harga Massal", "Daftar Promo", "Salin Promo", "Promo Bundling"
    ]

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (
        <Box p={'10px'} w={'90%'} mx={'auto'}>
            <Box>
                <VStack spacing={'20px'} mt={'30px'}>
                    <Heading>Siap mengguncang dunia? DEOAPP LMS hadir untuk membantumu memperoleh akses learning yang di rancang sangat ekslusif dengan mentor yang terkemuka se-Indonesia yang dapat memberikan pengalaman yang tak terlupakan dan kamu akan terkejut betapa cepatnya membangun kapasitas KONGNITIF mu dan siap memulai bisnis yang kamu impikan</Heading>
                </VStack>
            </Box>
            {isDesktop ?
                <HStack spacing={'20px'}>
                    <Box>
                        <Image w={'300px'} src={image} />
                    </Box>
                    <Box>
                        <Box bg={'white'} p={'30px'} mt={'130px'} >
                            <Text color={'blue'}>Daftar Produk</Text>
                            <Text>Sekali uplod untuk semua channel penjualan.</Text>
                        </Box>
                        <Box>
                            {menu.map((item, index) => (
                                <Box key={index} borderBottom={'1px solid grey'} py={'20px'}>
                                    <Text> {item}</Text>
                                </Box>
                            ))}

                        </Box>
                    </Box>
                </HStack> :
                <VStack spacing={'20px'}>
                    <Box bg={'white'} p={'30px'} mt={'30px'} w={'90%'}>
                        <Text color={'blue'}>Daftar Produk</Text>
                        <Text>Sekali uplod untuk semua channel penjualan.</Text>
                    </Box>
                    <Box>
                        <Image w={'200px'} src={image} />
                    </Box>

                    <Box w={'90%'} >
                        {menu.map((item, index) => (
                            <Box key={index} borderBottom={'1px solid grey'} py={'20px'}>
                                <Text> {item}</Text>
                            </Box>
                        ))}

                    </Box>

                </VStack>
            }
        </Box>
    )
}

const Bisnis = () => {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (

        <Box w={'90%'} mx={'auto'}>
            <Center mt={'70px'} spacing={'30px'}  >

                <Heading textAlign={'center'} w={{ base: "95%", lg: '50%' }} fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '50px' }} >Siap mengguncang dunia?</Heading>

            </Center>
            {isDesktop ?
                <HStack mt={'20px'} spacing={150}>
                    <Box w={'80%'}>
                        <Text size={'lg'} fontSize={{ base: "20px", lg: '30px' }} fontFamily={'inherit'}>DEOAPP LMS hadir untuk membantumu memperoleh akses learning yang di rancang sangat ekslusif dengan mentor yang terkemuka se-Indonesia yang dapat memberikan pengalaman yang tak terlupakan dan kamu akan terkejut betapa cepatnya membangun kapasitas kognitif mu dan siap memulai bisnis yang kamu impikan</Text>
                    </Box>
                    <Center>
                        <Image w={'400px'} src={image} />
                    </Center>

                </HStack> :
                <Box py={'40px'} spacing={'50px'}>
                    <Box mt={'20px'} w={"80%"} mx={'auto'}>
                        <Heading size={'lg'} color={'blue'} t fontSize={{ base: "20px", lg: '30px' }} fontFamily={'inherit'} >
                            DEOAPP LMS hadir untuk membantumu memperoleh akses learning yang di rancang sangat ekslusif dengan mentor yang terkemuka se-Indonesia yang dapat memberikan pengalaman yang tak terlupakan dan kamu akan terkejut betapa cepatnya membangun kapasitas kognitif mu dan siap memulai bisnis yang kamu impikan
                        </Heading>

                    </Box>
                    <Center>
                        <Image w={'600px'} src={image} />

                    </Center>

                </Box>
            }

        </Box>

    )
}

const Fitur = () => {
    return (
        <Box w={'90%'} mx={'auto'} p={'40px'}>
            <VStack spacing={'30px'}  >
                <Heading textAlign={'center'} >Fitur katalog ini yang bisnismu butuhkan?</Heading>
                <Text fontSize={'20px'} textAlign={'center'} >Kelola produk, harga, dan promo jadi gampang banget!</Text>
                <Button p={'30px'} bg={'blue'} color={'white'}>Coba Gratis</Button>

            </VStack>

        </Box>

    )
}

const Lainnya = () => {

    const icon = [
        {
            title: "Persediaan",
            image: "https://jubelio.com/wp-content/uploads/2023/03/Frame-34.svg",
        },
        {
            title: "Pesanan",
            image: "https://jubelio.com/wp-content/uploads/2023/03/Frame-35.svg",
        },
        {
            title: "Gudang",
            image: "https://jubelio.com/wp-content/uploads/2023/03/Frame-36.svg",
        },
        {
            title: "Pembukuaan",
            image: "https://jubelio.com/wp-content/uploads/2023/03/Frame-37.svg",
        },
        {
            title: "Intelegensi Bisnis",
            image: "https://jubelio.com/wp-content/uploads/2023/03/Frame-38.svg",
        }

    ]

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (
        <Box w={'90%'} mx={'auto'} p={'40px'}>
            <VStack spacing={'30px'}  >
                <Heading textAlign={'center'} >Fitur lainnya gak boleh kamu lewatkan</Heading>
                <Text fontSize={'20px'} textAlign={'center'} >Kenal lebih jauh tiap fiturnya dan sesuaikan dengan kebutuhan bisnismu.</Text>

                <Flex gap={{ base: '10px', lg: '60px' }} justifyContent={'center'} flexWrap={'wrap'}>
                    {icon.map((item, index) => (
                        <Box key={index} mb={'20px'}>
                            <Center borderRadius={'10px'} w={'150px'} h={'150px'} bg={'white'} boxShadow={'lg'} _hover={{ pb: "10px" }} >
                                <Image src={item.image} />

                            </Center>
                            <Heading textAlign={'center'} size={'sm'} mt={'10px'}>{item.title}</Heading>
                        </Box>
                    ))}

                </Flex>

            </VStack>

        </Box>

    )
}