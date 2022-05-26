import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RRLink, Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export default function Page() {
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box>
      <Flex
        p="4"
        pl="6"
        pr="6"
        alignItems="center"
        justifyContent="space-between"
        borderBottomColor={borderColor}
        borderBottomWidth="thin"
      >
        <Heading size="md" mr={8}>
          autokeyboard
        </Heading>
        <HStack as="nav" spacing="4">
          <Link
            as={RRLink}
            to="/"
          >
            <Button variant="link" p={2}>
              Home
            </Button>
          </Link>
          <Link
            as={RRLink}
            to="/"
          >
            <Button variant="link" p={2}>
              Settings
            </Button>
          </Link>
        </HStack>
        <HStack flex={1} justifyContent="right">
          <ColorModeSwitcher />
        </HStack>
      </Flex>
      <Outlet />
    </Box>
  );
}
