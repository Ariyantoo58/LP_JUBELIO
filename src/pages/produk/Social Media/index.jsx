import 
{ Stack,
Box,
Heading,
Text,
Image,
useBreakpointValue,
VStack,
Flex,
Center,
HStack,
Button,
} from '@chakra-ui/react';

// import Keunggulan from './keunggulan';
// import Keuntungan from './keuntungan';

import ButtonStart from '../../../components/Button';
import AnimetedSM from "../../../assets/background/Social Media Content.gif"
import Bg from "../../../assets/background/bg Lms.jpeg"
import Logo from '../../../assets/logo/deoapp.png'
import Logo1 from "../../../assets/logo Deoapp/Logo Deoapp 1 CRM.png"
import Logo2 from "../../../assets/logo Deoapp/Logo Deoapp 1 Finance.png"
import Logo3 from "../../../assets/logo Deoapp/Logo Deoapp 1 HR Management.png"
import Logo4 from "../../../assets/logo Deoapp/Logo Deoapp 1 marketing.png"
import Logo5 from "../../../assets/logo Deoapp/Logo Deoapp 1 POS.png"
import logo6 from "../../../assets/logo Deoapp/Logo Deoapp 1 Project Management.png"
import logo7 from "../../../assets/logo Deoapp/Logo Deoapp 1 social media.png"
import { FiMinusCircle } from 'react-icons/fi';


export default function SocialMedia() {

return (
    <Box>
        <Box>
            <Main />
        </Box>
        {/* <Box>
            <Bisnis />
        </Box> */}
        {/* <Box my={{ base: 10, lg: 100 }}>
            <Keunggulan />
        </Box>
        <Box bg={'#f2f2f2'} >
            <Keuntungan />
        </Box> */}
        {/* <Box bg={"#e1f0ff"}>
            <Fitur />
        </Box> */}
        <Box  >
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
            <Image w={'80%'} m={'auto'} src={AnimetedSM} />
        </Stack>}
        <Box maxW={'90%'} display={'flex'} flexDirection={['column-reverse', 'row', 'row']} m={'auto'} gap={10}>
            <Stack
                w={'100%'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 5, md: 20 }}
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
                        <Text fontSize={{ base: "25px", lg: '40px' }} as={'span'} color={'black'} fontFamily={'sans-serif'} fontWeight={'bold'}>
                            “Headline <Text as={'span'} color={'#F83C09'}>Social Media Management”
                        </Text>
                        </Text>
                    </Heading>

                    <Stack
                        spacing={{ base: 0, lg: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <ButtonStart />
                    </Stack>
                </Stack>
            </Stack>
            {isDesktop ? <Stack w={'80%'} >
                <Image w={'100%'} m={'auto'} src={AnimetedSM} />
            </Stack> : <></>}
        </Box>
    </Box>
)
}

const Keuntungann = () => {

const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
});

return (
    <>
        {isDesktop ?
            <Box w={'90%'} mx={'auto'}>
                <Center >
                    <VStack mt={'70px'} spacing={'30px'}>
                        <Heading >Apa untungnya pakai fitur Katalog?</Heading>
                        <Text >Lihat bagaimana kami mudahkan pengelolaan katalog produk.</Text>
                        <Center bg={"#BADFFF"} w={'90%'} py={'20px'} borderRadius={'10px'}>
                            <Button mr={'20px'} bg={'blue'} color={'white'}>
                                Tanpa Jubelio
                            </Button>
                            <Button bg={'white'} >
                                Dengan Jubelio
                            </Button>
                        </Center>
                    </VStack>
                </Center>
                <HStack mt={'40px'}>
                    <Center>
                        <Image src={"https://jubelio.com/wp-content/uploads/2023/03/katalog-tanpa-jubelio-1.gif"} />

                    </Center>
                    <Box>
                        <HStack spacing={'15px'} mb={'30px'}>
                            <FiMinusCircle fontSize={'30px'} color="red" />
                            <Text>Perlu banyak waktu dan karyawan buat kelola ratusan bahkan ribuan produk di banyak channel jualan?</Text>
                        </HStack>
                        <HStack spacing={'15px'} mb={'30px'}>
                            <FiMinusCircle fontSize={'30px'} color="red" />
                            <Text>Perlu banyak waktu dan karyawan buat kelola ratusan bahkan ribuan produk di banyak channel jualan?</Text>
                        </HStack>
                        <HStack spacing={'15px'}>
                            <FiMinusCircle fontSize={'30px'} color="red" />
                            <Text>Perlu banyak waktu dan karyawan buat kelola ratusan bahkan ribuan produk di banyak channel jualan?</Text>
                        </HStack>

                    </Box>
                </HStack>
            </Box> :
            <Box w={'90%'} mx={'auto'} mb={'50px'}>
                <Center >
                    <VStack mt={'70px'} spacing={'30px'}>
                        <Heading >Apa untungnya pakai fitur Katalog?</Heading>
                        <Text >Lihat bagaimana kami mudahkan pengelolaan katalog produk.</Text>
                        <VStack bg={"#BADFFF"} w={'90%'} py={'20px'} borderRadius={'10px'}>
                            <Button w={'90%'} bg={'blue'} color={'white'}>
                                Tanpa Jubelio
                            </Button>
                            <Button w={'90%'} bg={'white'} >
                                Dengan Jubelio
                            </Button>
                        </VStack>
                    </VStack>
                </Center>
                <VStack mt={'40px'}>
                    <Center>
                        <Image src={"https://jubelio.com/wp-content/uploads/2023/03/katalog-tanpa-jubelio-1.gif"} />

                    </Center>
                    <Box>
                        <HStack spacing={'30px'} mb={'30px'}>
                            <FiMinusCircle fontSize={'50px'} color="red" />
                            <Text>Perlu banyak waktu dan karyawan buat kelola ratusan bahkan ribuan produk di banyak channel jualan?</Text>
                        </HStack>
                        <HStack spacing={'30px'} mb={'30px'}>
                            <FiMinusCircle fontSize={'50px'} color="red" />
                            <Text>Perlu banyak waktu dan karyawan buat kelola ratusan bahkan ribuan produk di banyak channel jualan?</Text>
                        </HStack>
                        <HStack spacing={'30px'}>
                            <FiMinusCircle fontSize={'50px'} color="red" />
                            <Text>Perlu banyak waktu dan karyawan buat kelola ratusan bahkan ribuan produk di banyak channel jualan?</Text>
                        </HStack>

                    </Box>
                </VStack>
            </Box>
        }
    </>
)
}

const Lainnya = () => {

const icon = [
    Logo1, Logo2, Logo3, Logo4, Logo5, logo6, logo7]
return (
    <Box my={20}>

        <Box w={'90%'} mx={'auto'} px={'40px'} >
            <VStack spacing={20} >
                <Heading textAlign={'center'} >Jelajahi Produk Deoapp Lainnya</Heading>
                <Flex gap={{ base: '50px', lg: '100px' }} justifyContent={'center'} flexWrap={'wrap'}>
                    {icon.map((item, index) => (
                        <Box key={index} w={{ base: "40%", lg: '15%' }}>
                            <Center h={'30px'} _hover={{ pb: "10px" }} >
                                <Image src={item} />
                            </Center>
                            {/* <Heading textAlign={'center'} size={'sm'} mt={'10px'}>{item.title}</Heading> */}
                        </Box>
                    ))}

                </Flex>

            </VStack>

        </Box>
    </Box>

)
}