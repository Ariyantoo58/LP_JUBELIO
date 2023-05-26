import {
    Stack,
    Box,
    Heading,
    Text,
    Image,
    useBreakpointValue,
} from '@chakra-ui/react';

import ButtonStart from '../../../components/Button';
import AnimetedFinance from "../../../assets/background/Finance.gif"
import Bg from "../../../assets/background/bg Lms.jpeg"
import Logo from '../../../assets/logo/deoapp.png'

export default function Finance() {

    return (
        <Box>
            <Box>
                <Main />
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
                    <Stack flex={1} spacing={{ base: 5, md: 2 }}>
                        <Box>
                            <Image src={Logo} w={200} />
                        </Box>

                        <Heading
                            lineHeight={1}
                            fontWeight={500}
                            paddingBottom={10}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                            <Text fontSize={{ base: "35px", lg: '40px' }} as={'span'} color={'black'} fontFamily={'sans-serif'} fontWeight={'bold'}>
                                “Tingkatkan <Text as={'span'} color={'#F83C09'}>intelegensi</Text> mu dan raih kesuksesan bersama <Text as={'span'} color={'#F83C09'}>DEOAPP LMS, </Text>  Nikmati Kenyamatan dan Kemudahan akses learning bersama mentor terkemuka se- <Text as={'span'} color={'#F83C09'}>Indonesia</Text>”
                            </Text>
                        </Heading>

                        <Text color={'black'} fontWeight={'bold'}>
                            DeoApp hadir dengan segudang fitur kece yang akan bikin bisnis dan kariermu naik level! Siap-siap terbang menuju puncak kejayaan! 🚀
                        </Text>
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
