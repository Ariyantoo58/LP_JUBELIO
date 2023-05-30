import { Button, Flex, Heading, VStack, Box, Center, Text, HStack, Image, Icon, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import FinanceMon from '../../../assets/thumbnail/finance-monitoring.png'
import Gambar1 from '../../../assets/images/Group.png'


export default function Keuntungan() {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });
    const [change, setChange] = useState(false)


    return (
        <Box w={'90%'} m={'auto'} my={30} py={{ base: 0, lg: 30 }} bg={'#f7b457'}>
            <Box my={30}>
                <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '50px' }} >Aplikasi Cerdas</Heading>
                <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '50px' }}> mampu Mengoptimalkan Keuangan Bisnismu. </Heading>

            </Box>

            <Box >
                <Flex flexWrap={'wrap'}  >
                    <Center w={{ base: '80%', lg: '40%' }} >
                        <Image w={"100%"} src={FinanceMon} />
                    </Center>
                    <Center w={{ base: '100%', lg: '60%' }} >
                        <Stack px={{ base: 2, lg: 0 }}>
                            <Text fontSize={30}>Optimalkan Keuanganmu Layaknya Top company. Deoapp Finance, Mitra Terbaik untuk Memulai Mengelola Keuangan dengan Langkah yang Tepat. Dapatkan Konsep Luar Biasa dalam Pengelolaan Keuangan yang Profesional. Tingkatkan Kepercayaan Diri dan Keterampilan Keuangan Anda bersama Deoapp Finance</Text>
                        </Stack>
                    </Center>
                </Flex>
            </Box>
        </Box>
    )
}