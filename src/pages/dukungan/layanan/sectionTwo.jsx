import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Stack,
    Text,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { useState } from 'react';
  

export default function SectionTwo () {
return(
    <Box >
    <Box w={{ base: '100%', lg: '90%' }} m={'auto'}>
    <Box p={5}>
    <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'} padding={'2%'}>
    <Heading fontSize={'3xl'}>Tahapan yang kamu dapatkan setelah purna jual</Heading>
          <Container maxW={'7xl'} mt={1} padding={'2%'}>
            <Flex flexWrap="wrap" gridGap={12} justify="center">
              <Flex 
              h={80}
              maxW={{ base: 'full', md: '800px', lg: '1100px' }}
              w={'full'}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow= {'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
              display='flex'
              >
                <Flex 
                w='50%'
                alignItems='center'
                justifyContent='center'
                display='flex'
                flexDirection='column'>
                    <Box w='50%' m='auto'>
                        <Text
                        fontSize="15pt" fontWeight="bold" textAlign='left'>
                        Onboarding
                        </Text>
                        <Text color='grey' textAlign='left' mt={5}>
                        Jubelio bakal membantumu dalam proses awal, seperti data setup dan tutorial penggunaan setiap fitur dan produk.
                        </Text>

                    </Box>
                </Flex>
                <Flex 
                w='50%'borderLeft={'1px solid #e3f4f4'} 
                bg="#E3F4F4"
                alignItems='center'
                justifyContent='center'>
                    <Image 
                    w='70%'
                    src={'https://jubelio.com/wp-content/uploads/2023/04/image-onboarding-1.svg'}/>
                </Flex>
              </Flex>

              

              <Flex 
              h={80}
              maxW={{ base: 'full', md: '800px', lg: '1100px' }}
              w={'full'}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow= {'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
              display='flex'
              >
                <Flex w='50%'>
                <Box w='50%' m='auto'>
                        <Text
                        fontSize="15pt" fontWeight="bold" textAlign='left'>
                        Retention
                        </Text>
                        <Text color='grey' textAlign='left' mt={5}>
                        Tim Jubelio melakukan follow up secara berkala kepada klien untuk memastikan agar penggunaan berjalan lancar.
                        </Text>

                    </Box>
                </Flex>
                <Flex 
                w='50%'
                borderLeft={'1px solid #F8E8EE'} 
                bg="#F8E8EE"
                alignItems='center'
                justifyContent='center'
                >
                <Image 
                    w='70%'
                    src={'https://jubelio.com/wp-content/uploads/2023/04/image-retention-1.svg'}/>
                </Flex>
                    
              </Flex>

              <Flex 
              h={80}
              maxW={{ base: 'full', md: '800px', lg: '1100px' }}
              w={'full'}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow= {'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
              display='flex'
              >
                <Flex w='50%' bg="#e3f4f4"
                alignItems='center'
                justifyContent='center'>
                     <Image 
                    w='70%'
                    src={'https://jubelio.com/wp-content/uploads/2023/04/image-pusatedukasijubelio-1.svg'}/>
                </Flex>
                <Flex w='50%'borderLeft={'1px solid #e3f4f4'} >
                <Box w='50%' m='auto'>
                        <Text
                        fontSize="15pt" fontWeight="bold" textAlign='left'>
                        Pusat Edukasi Jubelio
                        </Text>
                        <Text color='grey' textAlign='left' mt={5}>
                        Selain CS Jubelio, kamu juga bisa mengakses halaman edukasi Jubelio untuk mendapatkan informasi terkait tutorial penggunaan.
                        </Text>

                    </Box>
                </Flex>
                
              </Flex>
            </Flex>
        </Container>
        </Stack>
        </Box>
        </Box>
        </Box>
)}