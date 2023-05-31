import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export default function ButtonStart() {
  const navigate = useNavigate()
  return (
    <Link href={'https://wa.me/082211429125'}>
      <Button
        mt={5}
        rounded={'base'}
        flexDirection={'column'}
        px={30}
        py={9}
        colorScheme={'red'}
        bg={"#24D467"}
        _hover={{ bg: '#00FFAB' }}>
        <Text fontSize={'15pt'} fontWeight={'bold'}>
          Jadwalkan Demo
        </Text>
        <Text fontSize={'10pt'}>
          Via Whatsapp dengan Tim Deoapp
        </Text>
      </Button>
    </Link>

  )
}

export const ButtonJoinUs = () => {
  const navigate = useNavigate()
  return (
    <Link href="https://wa.me/082211429125"
      target="_blank">
      <Button _hover={{ bg: "#F83C09" }} fontSize={'20px'} color={'white'} w={{ base: '40%', lg: '25%' }} h={{ base: 10, lg: 50 }} bg={"#24D467"} mt={'20px'}>Join Us</Button>
    </Link >
  )
}