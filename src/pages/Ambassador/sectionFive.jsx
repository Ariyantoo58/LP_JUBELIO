import {
    Box,
    Button,
    Container,
    Textarea,
    createIcon,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Input
  } from '@chakra-ui/react';


export default function SectionFive () {
    return (
        <Box bg="#f5faff">
        <Box display={'flex'} flexDirection={['column','row','row']} w={'97%'} m={'auto'} justifyContent={'center'} padding={'1%'}>
          <Box p={4} w={['100%','50%','50%']} mt={['0', '0', '5%']} >
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
              <Heading fontSize={'3xl'}>Program Afiliasi Jubelio</Heading>
              <Text color={'gray.600'} fontSize={'xl'}>
              Sudah mantap untuk gabung dan sukses bersama kami? Daftarkan diri sekarang dan raih keuntungan tanpa batas!
              </Text>
            </Stack>
          </Box>
          </Box>

        <Box w={'90%'} m={'auto'} display={{lg: 'flex'}}>
            <Box w={['100%', '35%' ,'35%']} m='auto'>
                <Text color={'grey'}>Nama Lengkap</Text>
                <Input mt={5} type='text'/>

                <Text color={'grey'} mt={6}>No. Handphone </Text>
                <Input mt={5} type='text'/>

                <Text color={'grey'} mt={6}>Kota</Text>
                <Input mt={5} type='text'/>

            </Box>


            <Box w={['100%', '35%' ,'35%']} m='auto' paddingBottom={'3%'}>
                <Text color={'grey'} mt={6}>Email</Text>
                <Input mt={5} type='text'/>

                <Text color={'grey'}>Social Media</Text>
                <Input mt={5} type='text'/>

                <Text color={'grey'} mt={6}>Social Media Username</Text>
                <Input mt={5} type='text'/>

                <Button
                    mt={10}
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'red'}
                    bg={'#14C38E'}
                    _hover={{ bg: '#00FFAB' }}>
                    Daftar
                </Button>
            </Box>
        </Box>
        
        </Box>
    )
}