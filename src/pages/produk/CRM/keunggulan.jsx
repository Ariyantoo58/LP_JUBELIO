import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import image1 from '../../../assets/thumbnail/Group 3125.png'
import image2 from '../../../assets/thumbnail/Group 3126.png'
import image3 from '../../../assets/thumbnail/Group 3127.png'
import image4 from '../../../assets/thumbnail/Group 3130.png'
import image5 from '../../../assets/thumbnail/Group 3128.png'
import { ButtonJoinUs } from "../../../components/Button";

export default function Keunggulan() {
    return (
        <VStack w={'90%'} mx={'auto'} spacing={50} >
            <Box >
                <Heading fontFamily={'sans-serif'} fontSize={{ base: "35px", lg: '40px' }} >kenapa deoapp CRM pilihan terbaik?</Heading>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image1} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '1%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading> Membangun Koneksi yang Mendalam </Heading>
                        <Text mt={'20px'} >Deoapp Finance hadir dengan tampilan simple dan menarik yang di buat khusus untuk mengelola keuangan bisnis kamu tanpa perlu pengalaman atau latar studi khusus sehingga semua pebisnis mampu mengelola keuangan bisnisnya dengan mudah dan menyenangkanDengan CRM Mastermind, Anda dapat membangun koneksi yang mendalam dengan setiap pelanggan. Kami memahami pentingnya memahami kebutuhan dan preferensi mereka. Dengan pemetaan pelanggan yang cerdas dan analisis perilaku yang mendalam, Anda akan memiliki keunggulan dalam memberikan pengalaman yang memikat dan relevan.</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Automatisasi yang Cerdas</Heading>
                        <Text mt={'20px'}>Tingkatkan efisiensi operasional Anda dengan fitur automatisasi yang cerdas. CRM by Deoapp memberikan kemudahan dalam mengotomatisasi tugas-tugas rutin, mengirim pemberitahuan penting, dan mengelola alur kerja secara efisien. Anda akan menghemat waktu berharga, membebaskan tim Anda untuk fokus pada kegiatan yang lebih strategis.</Text>
                        <ButtonJoinUs />
                    </Box>
                    <Box flex={1} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image2} w={'100%'} />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '60px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}>
                        <Image src={image3} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Pertumbuhan Penjualan yang Pesat </Heading>
                        <Text mt={'20px'}>Dapatkan keuntungan dalam persaingan dengan alat penjualan yang kuat dari CRM by Deoapp. Dari manajemen prospek yang terorganisir hingga pelacakan penjualan yang rinci, Anda dapat melacak kemajuan tim penjualan Anda dengan mudah. Dengan informasi yang lebih baik, Anda dapat mengidentifikasi peluang penjualan baru dan mengoptimalkan upaya penjualan Anda.</Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '30px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={"wrap"} flexDir={{ base: 'column-reverse', lg: 'row' }}>

                    <Box flex={1} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }}  >
                        <Heading>Analisis Mendalam </Heading>
                        <Text mt={'20px'}>Dapatkan pemahaman yang jelas tentang kinerja bisnis Anda dengan analisis yang mendalam dari CRM by Deoapp. Laporan real-time yang terperinci dan visualisasi data yang interaktif memberikan wawasan yang bernilai dalam tren pasar, performa produk, dan perilaku pelanggan. Anda dapat mengambil keputusan yang lebih baik dan berdasarkan fakta, mempercepat pertumbuhan bisnis Anda.</Text>
                        <ButtonJoinUs />
                    </Box>
                    <Box flex={1} w={{ base: "90%", lg: "100%" }} mx={'auto'}  >
                        <Image src={image4} w={'100%'} />
                    </Box>
                </Flex>
            </Box>
            <Box my={{ base: '60px', lg: '0' }}>
                <Flex gap={{ base: '10px', lg: '50px' }} flexWrap={'wrap'} >
                    <Box flex={{ base: "none", lg: 1 }} w={{ base: "90%", lg: "100%" }} mx={'auto'}>
                        <Image src={image5} w={'100%'} />
                    </Box>
                    <Box flex={{ base: "none", lg: 1 }} py={{ base: '10px', lg: '3%' }} px={{ base: "20px", lg: '0' }} w={{ base: "100%", lg: "45%" }} >
                        <Heading>Tim Dukungan Ahli</Heading>
                        <Text mt={'20px'}>Kami adalah tim dukungan yang siap membantu Anda dalam setiap langkah. Dari penerapan awal hingga dukungan teknis, tim ahli kami akan memastikan Anda mendapatkan manfaat maksimal dari CRM by Deoapp. Kami komitmen untuk keberhasilan Anda!
                        </Text>
                        <ButtonJoinUs />
                    </Box>
                </Flex>
            </Box>
        </VStack >
    )
}