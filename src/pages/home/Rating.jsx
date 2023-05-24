import { Box, Center, Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import person from "../../assets/logo/person.png"


export default function Rating() {
    return (
        <Box w={'90%'} mx={'auto'} my={'40px'}>
            <Center my={'40px'}>
                <Heading>Apa yang dikatakan klien tentang kami</Heading>
            </Center>
            <Box>
                <Flex gap={4} flexWrap={'wrap'}>
                    <Box flex={1} p={'20px'} boxShadow={'lg'} borderRadius={'10px'}>
                        <HStack color={'orange'}>
                            <AiFillStar fontSize={"30px"} />
                            <AiFillStar fontSize={"30px"} />
                            <AiFillStar fontSize={"30px"} />
                            <AiFillStar fontSize={"30px"} />
                            <AiFillStar fontSize={"30px"} />
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} noOfLines={3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet molestiae molestias recusandae dolore ipsum minima in nesciunt perspiciatis. Nam aperiam fugit soluta veniam quidem maiores cum iste minus omnis impedit dignissimos necessitatibus tenetur explicabo tempore dolor architecto quibusdam dolorem molestias et, hic quo maxime voluptate? Perspiciatis nihil minus perferendis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui debitis temporibus quo saepe ipsam, illo nesciunt aspernatur commodi nulla!</Text>
                        <HStack mt={'20px'} spacing={'20px'}>
                            <Box>
                                <Image w={'50px'} borderRadius={'full'} src={person} />
                            </Box>
                            <Box>
                                <Heading size={'md'}>Ridho J</Heading>
                                <Text>Wearing Klamby</Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box flex={1} p={'20px'} boxShadow={'lg'} borderRadius={'10px'}>
                        <HStack color={'orange'}>
                            <AiFillStar fontSize={"30px"} />
                            <AiFillStar fontSize={"30px"} />
                            <AiFillStar fontSize={"30px"} />
                            <AiFillStar fontSize={"30px"} />
                            <AiFillStar fontSize={"30px"} />
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} noOfLines={6}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet molestiae molestias recusandae dolore ipsum minima in nesciunt perspiciatis. Nam aperiam fugit soluta veniam quidem maiores cum iste minus omnis impedit dignissimos necessitatibus tenetur explicabo tempore dolor architecto quibusdam dolorem molestias et, hic quo maxime voluptate? Perspiciatis nihil minus perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor voluptas quibusdam incidunt quo a consectetur odit repellendus mollitia beatae.</Text>
                        <HStack mt={'20px'} spacing={'20px'}>
                            <Box>
                                <Image w={'50px'} borderRadius={'full'} src={person} />
                            </Box>
                            <Box>
                                <Heading size={'md'}>Ridho J</Heading>
                                <Text>Wearing Klamby</Text>
                            </Box>
                        </HStack>
                    </Box>
                </Flex>
            </Box >
        </Box >
    )
}