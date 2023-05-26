import { Button, Flex, Heading, VStack, Box, Center, Text, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import Gambar1 from '../../../assets/images/duk1.jpg'
import Gambar2 from '../../../assets/images/duk2.jpeg'

export default function Keuntungan() {

    const [change, setChange] = useState(false)


    return (
        <Box w={'90%'} m={'auto'} my={30}>
            <VStack spacing={30}>
                <Heading>Apa untungnya pakai DeoApp LMS?</Heading>
                <Text>Memudahkan kamu untuk belajar</Text>

                <Flex p={3} borderRadius={10} w={'50%'} bg={'#f2f2f2'} justifyContent={'center'} gap={10}>
                    <Button bg={'#f7580a'} color={'white'} onClick={() => setChange(true)}>Tanpa Deoapp LMS</Button>
                    <Button color={'#f7580a'} bg={'white'} border={'1px solid #f7580a'} onClick={() => setChange(false)}>Dengan Deoapp LMS</Button>
                </Flex>
                <Box >
                    {change ?
                        <Flex>
                            <Box flex={1}>
                                <Image src={Gambar1} />
                            </Box>
                            <Center flex={1}>
                                <Text>Lojkayuwkhefjb jbafeguia tas cumque dignissimos alias vero nemo, minima ducimus error, numquam, excepturi quam hic quisquam repudiandae repellendus? Incidunt labore illum cupiditate asperiores porro ipsam ducimus? Facilis incidunt aspernatur molestiae dignissimos vel eius ratione, beatae omnis repellendus itaque officia.</Text>
                            </Center>
                        </Flex> :
                        <Flex>
                            <Box flex={1}>
                                <Image src={Gambar2} />
                            </Box>
                            <Center flex={1}>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque dignissimos alias vero nemo, minima ducimus error, numquam, excepturi quam hic quisquam repudiandae repellendus? Incidunt labore illum cupiditate asperiores porro ipsam ducimus? Facilis incidunt aspernatur molestiae dignissimos vel eius ratione, beatae omnis repellendus itaque officia.</Text>
                            </Center>
                        </Flex>
                    }
                </Box>

            </VStack>

        </Box>
    )
}