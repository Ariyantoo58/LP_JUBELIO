import { Button, Text } from "@chakra-ui/react";

export default function ButtonStart () {
  return (
    <Button
                mt={5}
                w={{base:'100%', lg:'30%'}}
                flexDirection={'column'}
                px={30}
                py={9}
                colorScheme={'red'}
                bg={'#14C38E'}
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