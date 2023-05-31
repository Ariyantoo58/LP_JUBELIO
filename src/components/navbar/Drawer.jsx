import { Box, Button, Text, VStack, Heading, useDisclosure, Collapse, Image } from "@chakra-ui/react"
import { Menus } from "./utils"
import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const platform = 'https://jubelio.com/wp-content/uploads/2023/03/Jubelio-Omnichannel-1.svg'
const pos = "https://jubelio.com/wp-content/uploads/2023/03/Frame-11.svg"
const store = "https://jubelio.com/wp-content/uploads/2023/03/Frame-10.svg"
const chat = "https://jubelio.com/wp-content/uploads/2023/03/Frame-12.svg"
const shipment = "https://jubelio.com/wp-content/uploads/2023/03/Frame-13.svg"

export default function Drawers() {
    const { isOpen, onToggle } = useDisclosure()
    const navigate = useNavigate()
    const [prod, setProd] = useState()
    const handleChange = (item) => {
        setProd(item)
        navigate(`/product/${item}`)

    }

    return (
        <Box >
            {Menus.map((item, index) => (
                <Box key={index} >
                    <Box py={3} onClick={() => { handleChange(item) }} >
                        <Link> <Heading _hover={{ color: '#f7580a' }} color={prod == item ? '#f7580a' : 'black'} size={'md'}>{item}</Heading> </Link>

                    </Box>


                    {/* {prod == item && prod !== undefined ?
                        <Collapse in={isOpen} animateOpacity>
                            <Box
                                px='10px'
                                color='black'
                                bg='#E1F0FF'
                                rounded='md'
                                shadow='md'
                            >
                                <Box >
                                    {(item.resource !== undefined ? item.resource : []).map((x, i) => (
                                        <>
                                            {x == platform || x == pos || x == store || x == chat || x == shipment ?
                                                <Box py={'10px'} as={'button'} onClick={() => handleChange(x)} >
                                                    <Image w={'120px'} src={x} />
                                                </Box> : <Box py={'10px'} onClick={() => handleChange(x)} >
                                                    <Link>{x}</Link>
                                                </Box>}
                                        </>
                                    ))}
                                </Box>
                            </Box>
                        </Collapse> : <></>
                    } */}

                </Box>


            ))}

            <Box mt={'50px'}>
                <Button bg={'#f7580a'} w={'70%'} mb={'20px'} color={'white'}>Jadwalkan Demo</Button>
            </Box>

        </Box>
    )
} 