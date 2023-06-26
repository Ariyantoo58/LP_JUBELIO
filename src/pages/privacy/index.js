import {
  Stack,
  Box,
  Heading,
  Text,
  Image,
  useBreakpointValue,
  VStack,
  Flex,
  Center,
  HStack,
  Button,
} from "@chakra-ui/react";

import ButtonStart from "../../components/Button";
import AnimetedFinance from "../../assets/logo/Privacy Policy (1).gif";
import Bg from "../../assets/Backgroundd/bg- LMS.png";
import Logo from "../../assets/logo/LMS1.png";
import { content } from "./store";
import { VscChecklist } from "react-icons/vsc";
import { CiCircleCheck, CiCircleList, CiCircleRemove } from "react-icons/ci";

export default function Privacy() {
  return (
    <Box>
      <Box>
        <Main />
      </Box>
      <Box>
        <TextPrivacy />
      </Box>
    </Box>
  );
}

export function Main() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box bgSize={"cover"} bgImage={Bg}>
      {isDesktop ? (
        <></>
      ) : (
        <Stack w={"100%"}>
          <Image w={"80%"} m={"auto"} src={AnimetedFinance} />
        </Stack>
      )}
      <Box
        maxW={"90%"}
        display={"flex"}
        flexDirection={["column-reverse", "row", "row"]}
        m={"auto"}
        gap={10}>
        <Stack
          w={"100%"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 5, md: 20 }}
          direction={{ base: "column", md: "row" }}>
          <Stack flex={1} spacing={{ base: 5, md: 4 }}>
            <Box>
              <Heading>PRIVACY & POLICY</Heading>
            </Box>

            <Heading
              lineHeight={1}
              fontWeight={500}
              paddingBottom={10}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
              <Text
                fontSize={{ base: "25px", lg: "20px" }}
                as={"span"}
                fontFamily={"sans-serif"}
                fontWeight={"bold"}>
                Effective as of Juny 26, 2023
              </Text>
            </Heading>
          </Stack>
        </Stack>
        {isDesktop ? (
          <Stack w={"80%"}>
            <Image w={"100%"} m={"auto"} src={AnimetedFinance} />
          </Stack>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}

const TextPrivacy = () => {
  return (
    <Box w={"90%"} mx={"auto"}>
      {content.map((item, index) => (
        <Box key={index} my={10}>
          <Heading>{item.title}</Heading>
          {item.desc.map((e) => (
            <Text my={25} fontSize={{ base: "14xpx", lg: "25px" }}>
              {e}
            </Text>
          ))}

          {item.table ? (
            <>
              {item.table.map((content, value) => (
                <HStack key={value}>
                  <CiCircleCheck />
                  <Text fontSize={{ base: "14px", lg: "25px" }} my={2}>
                    {content}
                  </Text>
                </HStack>
              ))}
            </>
          ) : (
            <></>
          )}
          {item.descFoot ? (
            <Text my={10} fontSize={{ base: "14px", lg: "25px" }}>
              {item.descFoot}
            </Text>
          ) : (
            <></>
          )}
        </Box>
      ))}
    </Box>
  );
};
