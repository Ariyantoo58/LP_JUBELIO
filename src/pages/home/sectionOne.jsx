import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    FcBusiness,
    FcCalculator,
    FcFactory,
    FcPicture,
    FcPuzzle,
  } from 'react-icons/fc';
  import image1 from '../../assets/logo Deoapp/Logo Deoapp (Abu-Abu) Finance.png'
  import image2 from '../../assets/logo Deoapp/Logo Deoapp (Abu-Abu) HR management.png'
  import image3 from '../../assets/logo Deoapp/Logo Deoapp (Abu-Abu) PM.png'
  import image4 from '../../assets/logo Deoapp/Logo Deoapp (Abu-Abu) POS.png'

  const CardProps = {
    heading: '',
    description: '',
    icon: null,
    href: ''
  };

  function SectionOne () {
    return (
        <Box p={5}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>OUR PRODUCT</Heading>
            </Stack>
            <Container maxW={'5xl'} mt={1} padding={'2%'}>
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
                    <Box w='70%' m='auto'>
                        <Text
                        fontSize="15pt" fontWeight="bold" textAlign='left'>
                        Finance
                        </Text>
                        <Text color='grey' textAlign='left' mt={5}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates recusandae natus nihil molestiae. Iure expedita harum, accusantium fuga, eos temporibus eum optio autem dicta nisi impedit ad, est nesciunt magni!
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
                    src={image1}/>
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
                <Flex w='50%' bg="#E3F4F4"
                alignItems='center'
                justifyContent='center'>
                    <Image 
                    w='70%'
                    src={image2}/>
                </Flex>
                <Flex w='50%'borderLeft={'1px solid #E3F4F4'} >
                <Box w='70%' m='auto'>
                        <Text
                        fontSize="15pt" fontWeight="bold" textAlign='left'>
                        HR Managemnt
                        </Text>
                        <Text color='grey' textAlign='left' mt={5}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea blanditiis veritatis, odit quaerat tenetur totam illum? Sapiente, nesciunt minima. Ipsam magni pariatur recusandae aut voluptatum! Cupiditate sed laborum ad accusamus!
                        </Text>

                    </Box>
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
                <Flex 
                w='50%'
                alignItems='center'
                justifyContent='center'
                display='flex'
                flexDirection='column'>
                    <Box w='70%' m='auto'>
                        <Text
                        fontSize="15pt" fontWeight="bold" textAlign='left'>
                        Project Management
                        </Text>
                        <Text color='grey' textAlign='left' mt={5}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates recusandae natus nihil molestiae. Iure expedita harum, accusantium fuga, eos temporibus eum optio autem dicta nisi impedit ad, est nesciunt magni!
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
                    src={image3}/>
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
                <Flex w='50%' bg="#E3F4F4"
                alignItems='center'
                justifyContent='center'>
                    <Image 
                    w='70%'
                    src={image4}/>
                </Flex>
                <Flex w='50%'borderLeft={'1px solid #E3F4F4'} >
                <Box w='70%' m='auto'>
                        <Text
                        fontSize="15pt" fontWeight="bold" textAlign='left'>
                        POS
                        </Text>
                        <Text color='grey' textAlign='left' mt={5}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea blanditiis veritatis, odit quaerat tenetur totam illum? Sapiente, nesciunt minima. Ipsam magni pariatur recusandae aut voluptatum! Cupiditate sed laborum ad accusamus!
                        </Text>

                    </Box>
                </Flex>
                
              </Flex>

              </Flex>
              </Container>

        </Box>
      )

  }
  export default SectionOne