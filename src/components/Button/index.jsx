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