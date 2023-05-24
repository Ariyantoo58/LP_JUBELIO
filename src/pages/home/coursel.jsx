import React, { Component } from "react";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";

import { HStack, Image, Box, Heading, Text, Center, useBreakpointValue } from "@chakra-ui/react";
import person from "../../assets/logo/person.png"
import { AiFillStar } from "react-icons/ai";

import Farhan from "../../assets/person/Farhan.jpeg"
import Azmi from "../../assets/person/Azmi.jpeg"
import Ridho from "../../assets/person/Ridho.jpeg"
import Edwin from "../../assets/person/Edwin.jpeg"
import Dini from "../../assets/person/Dini.jpeg"
import Nadia from "../../assets/person/Nadia.jpeg"
import Dzikra from "../../assets/person/Dzikra.jpeg"
import Rei from "../../assets/person/Rei.jpeg"
import Fahri from "../../assets/person/Fahri.jpeg"
import Dita from "../../assets/person/Dita.jpeg"



export default function AutoPlayRight() {

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    const setResponsive = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    }
    return (
        <Box w={'90%'} mx={'auto'} my={'40px'}>
            <Center my={'40px'}>
                <Heading>Apa yang dikatakan klien tentang kami</Heading>
            </Center>

            <Slider {...(isDesktop && settings)} {...(!isDesktop && setResponsive)} >
                <Box px={'10px'}>
                    <Box h={'200px'} marginX={'10px'} p={'20px'} boxShadow={'lg'} border={'1px solid grey'} mx={'10px'} borderRadius={'10px'}>
                        <HStack mt={'10px'} spacing={'20px'}>
                            <Box>
                                <Image w={'60px'} border={"1px solid black"} borderRadius={'full'} src={Farhan} />
                            </Box>
                            <Box>
                                <HStack>
                                    <Heading size={'md'}>farhan</Heading>
                                    <HStack color={'orange'}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </HStack>

                                </HStack>

                                <Text>Wearing Klamby</Text>
                            </Box>

                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} >Wahhhhhhh deoapp sangat membantu scaleup bisnis saya sehingga sekarang bisnis saya semakin meningkat</Text>
                    </Box>
                </Box>
                <Box px={'10px'}>
                    <Box h={'200px'} marginX={'10px'} p={'20px'} boxShadow={'lg'} border={'1px solid grey'} mx={'10px'} borderRadius={'10px'}>
                        <HStack mt={'10px'} spacing={'20px'}>
                            <Box>
                                <Image w={'60px'} border={"1px solid black"} borderRadius={'full'} src={Azmi} />
                            </Box>
                            <Box>
                                <HStack>
                                    <Heading size={'md'}>Azmi</Heading>
                                    <HStack color={'orange'}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </HStack>
                                </HStack>

                                <Text>Trading Syariah</Text>
                            </Box>
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} >deoapp sangat membantu dalam perkembangan bisnis saya, Sukses selalu deoapp</Text>
                    </Box>
                </Box>
                <Box px={'10px'}>
                    <Box h={'200px'} marginX={'10px'} p={'20px'} boxShadow={'lg'} border={'1px solid grey'} mx={'10px'} borderRadius={'10px'}>
                        <HStack mt={'10px'} spacing={'20px'}>
                            <Box>
                                <Image w={'60px'} border={"1px solid black"} borderRadius={'full'} src={Nadia} />
                            </Box>
                            <Box>
                                <HStack>
                                    <Heading size={'md'}>Nadia</Heading>
                                    <HStack color={'orange'}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </HStack>
                                </HStack>

                                <Text>Intrapreneurs</Text>
                            </Box>
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} >Saya benar-benar tertarik dan sangat terbantu oleh layanan deoapp </Text>
                    </Box>
                </Box>
                <Box px={'10px'}>
                    <Box h={'200px'} marginX={'10px'} p={'20px'} boxShadow={'lg'} border={'1px solid grey'} mx={'10px'} borderRadius={'10px'}>
                        <HStack mt={'10px'} spacing={'20px'}>
                            <Box>
                                <Image w={'60px'} border={"1px solid black"} borderRadius={'full'} src={Ridho} />
                            </Box>
                            <Box>
                                <HStack>
                                    <Heading size={'md'}>Ridho J</Heading>
                                    <HStack color={'orange'}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </HStack>
                                </HStack>

                                <Text>Wearing Klamby</Text>
                            </Box>
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} >deoapp sangat membantu mengembangkan perusahaan saya dengan aplikasi yang disediakan oleh deoapp. </Text>
                    </Box>
                </Box>
                <Box px={'10px'}>
                    <Box h={'200px'} marginX={'10px'} p={'20px'} boxShadow={'lg'} border={'1px solid grey'} mx={'10px'} borderRadius={'10px'}>
                        <HStack mt={'10px'} spacing={'20px'}>
                            <Box>
                                <Image w={'60px'} border={"1px solid black"} borderRadius={'full'} src={Edwin} />
                            </Box>
                            <Box>
                                <HStack>
                                    <Heading size={'md'}> Edwin</Heading>
                                    <HStack color={'orange'}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </HStack>
                                </HStack>

                                <Text>Algotrading</Text>
                            </Box>
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} >deoapp membuat platform saya mendapatkan profit yang sangat meningkat. </Text>
                    </Box>
                </Box>
            </Slider>
        </Box >
    );
}





export function AutoPlayLeft() {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: -1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    const setResponsive = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: -1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    }
    return (
        <Box w={'90%'} mx={'auto'} my={'40px'} >
            <Slider {...(isDesktop && settings)} {...(!isDesktop && setResponsive)} >
                <Box px={'10px'}>
                    <Box h={'200px'} marginX={'10px'} p={'20px'} boxShadow={'lg'} border={'1px solid grey'} mx={'10px'} borderRadius={'10px'}>
                        <HStack mt={'10px'} spacing={'20px'}>
                            <Box>
                                <Image w={'60px'} border={"1px solid black"} borderRadius={'full'} src={Rei} />
                            </Box>
                            <Box>
                                <HStack>
                                    <Heading size={'md'}>Reinhart</Heading>
                                    <HStack color={'orange'}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </HStack>
                                </HStack>

                                <Text>Affiliate</Text>
                            </Box>
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} >Terimakasih deoapp telah berhasil membuat usaha saya sangat berkembang pesat, berharap bisa berjumpa </Text>
                    </Box>
                </Box>
                <Box px={'10px'}>
                    <Box h={'200px'} marginX={'10px'} p={'20px'} boxShadow={'lg'} border={'1px solid grey'} mx={'10px'} borderRadius={'10px'}>
                        <HStack mt={'10px'} spacing={'20px'}>
                            <Box>
                                <Image w={'60px'} border={"1px solid black"} borderRadius={'full'} src={Dzikra} />
                            </Box>
                            <Box>
                                <HStack>
                                    <Heading size={'md'}>Dziikra</Heading>
                                    <HStack color={'orange'}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </HStack>
                                </HStack>

                                <Text>Marketer</Text>
                            </Box>
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} >100% deoapp sangat recomended dalam scale up bisnis. Saya sangat terbantu terimakasih deoapp</Text>
                    </Box>
                </Box>
                <Box px={'10px'}>
                    <Box h={'200px'} marginX={'10px'} p={'20px'} boxShadow={'lg'} border={'1px solid grey'} mx={'10px'} borderRadius={'10px'}>
                        <HStack mt={'10px'} spacing={'20px'}>
                            <Box>
                                <Image w={'60px'} border={"1px solid black"} borderRadius={'full'} src={Fahri} />
                            </Box>
                            <Box>
                                <HStack>
                                    <Heading size={'md'}>Fahri</Heading>
                                    <HStack color={'orange'}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </HStack>
                                </HStack>

                                <Text>Wearing Klamby</Text>
                            </Box>
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} >Deoapp sangatttt kerennn bangattt berkat deoapp sekarang platform saya banyak pengunjung </Text>
                    </Box>
                </Box>
                <Box px={'10px'}>
                    <Box h={'200px'} marginX={'10px'} p={'20px'} boxShadow={'lg'} border={'1px solid grey'} mx={'10px'} borderRadius={'10px'}>
                        <HStack mt={'10px'} spacing={'20px'}>
                            <Box>
                                <Image w={'60px'} border={"1px solid black"} borderRadius={'full'} src={Dini} />
                            </Box>
                            <Box>
                                <HStack>
                                    <Heading size={'md'}>Dhini</Heading>
                                    <HStack color={'orange'}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </HStack>
                                </HStack>

                                <Text>Cloud Khitchen</Text>
                            </Box>
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} >Luar biasa deoapp bisa membuat pelanggan saya semakin meningkat dan saya lebih mudah memasarkan produk saya</Text>
                    </Box>
                </Box>
                <Box px={'10px'}>
                    <Box h={'200px'} marginX={'10px'} p={'20px'} boxShadow={'lg'} border={'1px solid grey'} mx={'10px'} borderRadius={'10px'}>
                        <HStack mt={'10px'} spacing={'20px'}>
                            <Box>
                                <Image w={'60px'} border={"1px solid black"} borderRadius={'full'} src={Dita} />
                            </Box>
                            <Box>
                                <HStack>
                                    <Heading size={'md'}>Dita</Heading>
                                    <HStack color={'orange'}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </HStack>
                                </HStack>

                                <Text>Brainology</Text>
                            </Box>
                        </HStack>
                        <Text mt={'20px'} fontStyle={'italic'} >Deoapp TOP bangatttt followers ku semakin meningkat dan bisnis saya semakin maju </Text>
                    </Box>
                </Box>
            </Slider>
        </Box>
    );
}