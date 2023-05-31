import { useNavigate } from "react-router-dom";
// ** Chakra UI
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Link,
  Image,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react'

// Deoapp assets

import logo from '../../assets/deoapp/deoapp colors (4).png'

import image1 from '../../assets/logo/LMS.png'
import image2 from '../../assets/logo/CRM.png'
import image3 from '../../assets/logo/HR M.png'
import image4 from '../../assets/logo/Finance.png'
import image5 from '../../assets/logo/Marketing.png'
import image6 from '../../assets/logo/PJ.png'

// ** React Icons
import { FiMenu } from "react-icons/fi";

// ** Image
import { useState } from "react";
import { PopoverIcon } from "./PopoverIcon";
import Drawers from "./Drawer";



function Navbar() {
  const navigate = useNavigate()
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Box
      as="section"
      boxShadow="md"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
      bg={'white'}

    >
      <Box as="nav" bg="bg-surface">
        <Container
          px={{
            base: "5",
            lg: "75",
          }}
          py={{
            base: "6",
            lg: "6"
          }}

          maxW="100%"
          color={'white'}

        >

          <HStack spacing="10" justify="space-between">
            <HStack>
              {isDesktop ?
                <></> :
                <>
                  <IconButton
                    variant="ghost"
                    icon={<FiMenu color="black" fontSize="1.6rem" />}
                    aria-label="Open Menu"
                    _hover={{ bg: "transparent" }}
                    onClick={onOpen}
                  />
                  <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} >
                    <DrawerOverlay />
                    <DrawerContent bg={'white'} >
                      <DrawerCloseButton color={'black'} />
                      <DrawerHeader borderBottomWidth='1px' >
                        <Flex justifyContent={'space-around'} py={'20px'}>
                          <Box>
                            <Link href="/">
                              <Image src={logo} alt="DeoApp" width={150} />
                            </Link>
                          </Box>

                        </Flex>
                      </DrawerHeader>
                      <DrawerBody>
                        <Drawers />
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>
              }

              <Link href="/">
                <Image src={logo} alt="DeoApp" width={170} />
              </Link>
            </HStack>


            {isDesktop ? (
              <Flex justify="space-between" flex="1" >

                <HStack spacing={10}>
                  <ButtonGroup variant="link" spacing="8">
                    <Popover trigger="hover">
                      <PopoverTrigger>
                        <Button
                          variant="link"
                          rightIcon={<PopoverIcon />}
                          onClick={() => navigate('/product/katalog')}
                          color={'black'}
                        >
                          Produk
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent w={'200px'}>
                        <PopoverBody color={'black'} >
                          <Box px={'10px'} py={'10px'} >
                            <Box py={3} as={'button'} px={'15px'} onClick={() => navigate('/product/LMS')} borderBottom={'1px solid #f2f2f2'} _hover={{ borderBottom: "3px solid grey", px: '20px' }} >
                              <Image w={'110px'} src={image1} />
                            </Box>
                            <Box py={3} as={'button'} px={'15px'} onClick={() => navigate('/product/CRM')} borderBottom={'1px solid #f2f2f2'} _hover={{ borderBottom: "3px solid grey", px: '20px' }}>
                              <Image w={'110px'} src={image2} />
                            </Box>
                            <Box py={3} as={'button'} px={'15px'} onClick={() => navigate('/product/hr')} borderBottom={'1px solid #f2f2f2'} _hover={{ borderBottom: "3px solid grey", px: '20px' }}>
                              <Image w={'110px'} src={image3} />
                            </Box>
                            <Box py={3} as={'button'} px={'15px'} onClick={() => navigate('/product/finance')} borderBottom={'1px solid #f2f2f2'} _hover={{ borderBottom: "3px solid grey", px: '20px' }}>
                              <Image w={'110px'} src={image4} />
                            </Box>
                            <Box py={3} as={'button'} px={'15px'} onClick={() => navigate('/product/marketing')} borderBottom={'1px solid #f2f2f2'} _hover={{ borderBottom: "3px solid grey", px: '20px' }}>
                              <Image w={'110px'} src={image5} />
                            </Box>
                            <Box py={3} as={'button'} px={'15px'} onClick={() => navigate('/product/projectmanagament')} borderBottom={'1px solid #f2f2f2'} _hover={{ borderBottom: "3px solid grey", px: '20px' }}>
                              <Image w={'110px'} src={image6} />
                            </Box>


                          </Box>

                        </PopoverBody>

                      </PopoverContent>
                    </Popover>
                    <Button onClick={() => navigate('/harga')} color={'black'}>Harga</Button>
                    <Button onClick={() => navigate('/partner')} color={'black'}>Partner</Button>


                    <Popover trigger="hover">
                      <PopoverTrigger>
                        <Button
                          variant="link"
                          rightIcon={<PopoverIcon />}
                          color={'black'}

                        >
                          Dukungan
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent w={'200px'}>
                        <PopoverBody>
                          <Box px={'10px'} py={'15px'} borderBottom={'1px solid #f2f2f2'} >
                            <Button onClick={() => navigate('/dukungan/integrasiapi')} bg={'transparent'} _hover={{ color: "black" }} >Integrasi Api</Button>
                          </Box>
                          <Box px={'10px'} py={'15px'} >
                            <Button onClick={() => navigate('/dukungan/layanan')} bg={'transparent'} _hover={{ color: "black" }} >Layanan Purna Jual</Button>
                          </Box>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>

                  </ButtonGroup>
                </HStack>
                <HStack>
                  <Button py={'15px'} px={'30px'} bg={'#f7580a'} color={'white'}>Jadwalkan Demo</Button>
                  <Button py={'15px'} px={'30px'} color={'#f7580a'} border={'1px solid #f7580a'} bg={'white'} >Masuk</Button>
                </HStack>

              </Flex>
            ) : (
              <></>
            )}
          </HStack>
        </Container>
        <Divider />
      </Box>
    </Box>
  );
}

export default Navbar;
