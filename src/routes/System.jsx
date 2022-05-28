import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Spinner,
  StackDivider,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import config from "../config";

export default function System() {
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const [memInfo, setMemInfo] = useState(null);

  useEffect(() => {
    fetch(`${config.rootUrl}/memory`, {
      method: "GET",
      cache: "no-store",
    }).then((res) => res.json()).then((data) => {
      setMemInfo(data);
    });
  }, []);

  return (
    <Container pt={4} pb={4}>
      <VStack
        divider={<StackDivider />}
        spacing={4}
        align="stretch"
        borderColor={borderColor}
        borderWidth="thin"
        borderRadius={8}
        overflow="hidden"
        p={4}
      >
        <Box>
          <HStack justifyContent="space-between">
            <Heading size="sm">{config.rootUrl}</Heading>
            {memInfo === null
              ? <Badge colorScheme="red">Offline</Badge>
              : <Badge colorScheme="green">Online</Badge>}
          </HStack>
        </Box>
        {memInfo === null ? <Center m={4}><Spinner /></Center> : <Memory memInfo={memInfo} />}

        <Box p={2}>
          <Heading size="md" mb={4}>Power</Heading>
          <Alert status="warning" mb={4} borderRadius={8} fontWeight="semibold">
            <AlertIcon />
            Make sure you have physical access to the Pi before you turn it off.
          </Alert>
          <Flex justifyContent="end">
            <ButtonGroup>
              <Button disabled={memInfo === null} colorScheme="red">Power off</Button>
            </ButtonGroup>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
}

function Memory({ memInfo }) {
  const prettyTotalMem = Math.round(memInfo.total / 1000000) + " MB";
  const prettyFreeMem = Math.round(memInfo.free / 1000000) + " MB";
  const prettyUsedMem = Math.round((memInfo.total - memInfo.free) / 1000000) +
    " MB";

  return (
    <Box p={2}>
      <Heading size="md" mb={4}>Memory</Heading>

      {
        /* <HStack justifyContent="space-between">
          <Text size="sm">Total memory</Text>
          <Text>{prettyTotalMem}</Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text size="sm">Used memory</Text>
          <Text>{prettyUsedMem}</Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text size="sm">Free memory</Text>
          <Text>{prettyFreeMem}</Text>
        </HStack> */
      }

      <StatGroup>
        <Stat>
          <StatLabel>Used memory</StatLabel>
          <StatNumber>{prettyUsedMem}</StatNumber>
          <StatHelpText>Out of {prettyTotalMem}</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Free memory</StatLabel>
          <StatNumber>{prettyFreeMem}</StatNumber>
          <StatHelpText>Out of {prettyTotalMem}</StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
  );
}
