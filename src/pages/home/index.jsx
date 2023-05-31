import CallToAction from "./cta";
import SectionOne from "./sectionOne";
import { Portofolio } from "./sectionFive";
import Keunggulan from "./keunggulan";
import { AutoPlayLeft } from "./coursel";
import AutoPlayRight from "./coursel";
import SectionSix from "./sectionSix";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Bg from '../../assets/Backgroundd/bg- POS.png'


function IndexHome() {
    return (
        <>
            <CallToAction />
            <Keunggulan />
            <SectionOne />
            <Portofolio />
            <AutoPlayRight />
            <AutoPlayLeft />
            <SimpleCard />

            <SectionSix />

        </>
    )
}
export default IndexHome


const Form = () => {
    return (
        <iframe
            src="https://crm-api.deoapp.com/widget/form/vjSV05brQ2iK3wozA7Zv"
            className="frame"
            id="inline-vjSV05brQ2iK3wozA7Zv"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form DeoApp WEB"
            data-height="485"
            data-layout-iframe-id="inline-vjSV05brQ2iK3wozA7Zv"
            data-form-id="vjSV05brQ2iK3wozA7Zv"
            title="Form DeoApp WEB"
        >
        </iframe>
    )
}


export function SimpleCard() {
    return (
        <Flex
            minH={'90vh'}
            align={'center'}
            justify={'center'}
            bgImage={Bg}
            bgSize={'cover'}

        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} w={{ base: "95%", lg: '60%' }}>
                <Stack align={'center'}>
                    <Heading fontSize={'3xl'}>Jadwalkan Demo Sekarang!</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Isi form dibawah ini ya 🙂
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="text">
                            <FormLabel>Nama Lengkap</FormLabel>
                            <Input type="NAME" />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Alamat Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="phone">
                            <FormLabel>No.Hp</FormLabel>
                            <Input type="phone" />
                        </FormControl>
                        <Stack spacing={10}>

                            <Button
                                bg={'#f7580a'}
                                color={'white'}
                                _hover={{
                                    opacity: '90%',
                                }}>
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}