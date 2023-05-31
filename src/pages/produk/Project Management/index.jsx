import {
    Stack,
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

import Keunggulan from './keunggulan';
import Keuntungan from './keuntungan';

import ButtonStart from '../../../components/Button';
import AnimetedFinance from "../../../assets/background/Project management tools.gif"
import Bg from "../../../assets/Backgroundd/bg- PM.png"
import Logo from '../../../assets/logo/deoapp.png'
import Logo1 from "../../../assets/logo Deoapp/Logo Deoapp 1 CRM.png"
import Logo2 from "../../../assets/logo Deoapp/Logo Deoapp 1 Finance.png"
import Logo3 from "../../../assets/logo Deoapp/Logo Deoapp 1 HR Management.png"
import Logo4 from "../../../assets/logo Deoapp/Logo Deoapp 1 marketing.png"
import Logo5 from "../../../assets/logo Deoapp/Logo Deoapp 1 POS.png"
import logo6 from "../../../assets/logo Deoapp/Logo Deoapp 1 Project Management.png"
import logo7 from "../../../assets/logo Deoapp/Logo Deoapp 1 social media.png"
import image1 from '../../../assets/images/Group 3088.png'
import { ButtonJoinUs } from "../../../components/Button";
import Finan from '../../../assets/icon baru/project-management (4).png'
import Pricing from '../../pricing';
import Rating from '../../home/Rating';
import AutoPlayRight, { AutoPlayLeft } from '../../home/coursel';

export default function PM() {

    return (
        <Box>
            <Box>
                <Main />
            </Box>
            <Box w={'95%'} mx={'auto'}>
                <Mengelola />
            </Box>
            <Box my={{ base: 10, lg: 100 }}>
                <Keunggulan />
            </Box>

            <Box>
                <AutoPlayRight />
                <AutoPlayLeft />

            </Box>
            <Box>
                <Pricing />
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
                                Manajemen Proyek Lebih <Text as={'span'} color={'#F83C09'}> Mudah</Text> dan <Text as={'span'} color={'#F83C09'}>Effisien</Text> dengan Solusi <Text as={'span'} color={'#F83C09'}>Inovatif</Text> dari Deoapp Project Management
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
                    <Image w={'100%'} m={'auto'} src={AnimetedFinance} />
                </Stack> : <></>}
            </Box>
        </Box>
    )
}

// Menegelola 
const Mengelola = () => {
    return (
        <>
            <Box>
                <Box w="95%" my={10} mx={'auto'} >
                    <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '50px' }} >Ingin punya paltform  SDM yang terorganisir?</Heading>

                </Box>
                <Box my={{ base: '30px', lg: '0' }}>
                    <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                        <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "30%" }} mx={'auto'}  >
                            <Image src={Finan} w={'100%'} />
                        </Box>
                        <Center flex={{ base: "none", lg: 2 }} py={{ base: '10px', lg: '1%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}>
                            <Box  >
                                <Text fontSize={30}> Dengan sistem yang terkemuka, platfotm kami dirancang untuk memastikan kamu dapat mengelola proyek secara terstruktur dan terorganizir namun mudah dan efisien
                                    mudah dan efisien.
                                </Text>

                            </Box>
                        </Center>
                    </Flex>
                </Box>
            </Box>
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