import { Button, Text } from "@chakra-ui/react";

export default function ButtonStart() {
  return (
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
        Konsultasi LANGSUNG Yuk!
      </Text>
      <Text fontSize={'10pt'}>
        Via Whatsapp dengan Tim Deoapp
      </Text>
    </Button>
  )
}

export const ButtonJoinUs = () => {
  return (
    <Button _hover={{ bg: "#F83C09" }} fontSize={'20px'} color={'white'} w={{ base: '40%', lg: '25%' }} h={{ base: 10, lg: 50 }} bg={"#24D467"} mt={'20px'}>Join Us</Button>
  )
}