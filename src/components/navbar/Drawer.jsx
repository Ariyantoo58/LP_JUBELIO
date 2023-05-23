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
        console.log(item, 'ini item')

        if (item == "katalog") {
            navigate('/product/katalog')
        }
        if (item == platform) {
            navigate('/product/platform')
        }
        if (item == pos) {
            navigate('/product/pos')
        }
        if (item == store) {
            navigate('/product/store')
        }
        if (item == shipment) {
            navigate('/product/shipment')
        }
        if (item == chat) {
            navigate('/product/chat')
        }

        if (item == "Persediaan") {
            navigate('/product/persediaan')
        }
        if (item == "Pesanan") {
            navigate('/product/pesanan')
        }
        if (item == "Gudang (WMS)") {
            navigate('/product/gudang')
        }
        if (item == "Intelegensi Bisnis") {
            navigate('/product/intelegensi-bisnis')
        }
        if (item.title == "Pembukuan") {
            navigate('/product/pembukuan')
        }
        if (item.title == "Produk") {
            onToggle()
            setProd(item)
        }
        if (item.title == "Harga") {
            navigate('/harga')
        }
        if (item.title == "Partner") {
            navigate('/partner')
        }
        if (item.title == "Affiliasi") {
            onToggle()
            setProd(item)
        }
        if (item == "Affiliasi") {
            navigate('/affiliasi/affiliasi')
        }
        if (item == "Ambassador") {
            navigate('/affiliasi/ambassador')
        }
        if (item.title == "Dukungan") {
            onToggle()
            setProd(item)
        }
        if (item == "Integrasi Api") {
            navigate('/dukungan/integrasiapi')
        }

    }
    console.log(prod, 'ini prod')

    return (
        <Box px={'10px'}>
            {Menus.map((item, index) => (
                <Box>
                    <Box key={index} py={'15px'} onClick={() => { handleChange(item) }}>
                        <Link> <Heading size={'md'}>{item.title}</Heading>
                        </Link>

                    </Box>

                    {prod == item && prod !== undefined ?
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
                    }

                </Box>


            ))}

            <Box mt={'50px'}>
                <Button bg={'blue'} w={'70%'} mb={'20px'} color={'white'}>Coba Gratis</Button>
                <Button bg={'white'} w={'70%'} border={'1px solid black'} onClick={() => navigate('/signin')}>Masuk</Button>
            </Box>

        </Box>
    )
} 