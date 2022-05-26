import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { Link as RRLink, Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { FaChartArea, FaHome } from "react-icons/fa";

export default function Page() {
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const location = useLocation().pathname;

  return (
    <Flex direction="column" height="100vh">
      <Stack
        direction="row"
        p="4"
        pl="6"
        pr="6"
        alignItems="center"
        justifyContent="space-between"
        borderBottomColor={borderColor}
        borderBottomWidth="thin"
        spacing={4}
      >
        <Heading size="md">
          autokeyboard
        </Heading>
        <HStack as="nav" spacing="4">
          <Link
            as={RRLink}
            to="/"
          >
            <Button
              colorScheme={location === "/" ? "blue" : ""}
              leftIcon={<FaHome />}
              variant="link"
              p={2}
            >
              Home
            </Button>
          </Link>
          <Link
            as={RRLink}
            to="/system"
          >
            <Button
              colorScheme={location === "/system" ? "blue" : ""}
              leftIcon={<FaChartArea />}
              variant="link"
              p={2}
            >
              System
            </Button>
          </Link>
        </HStack>
        <HStack flex={1} justifyContent="right">
          <ColorModeSwitcher />
        </HStack>
      </Stack>

      <Box flex={1} overflowY="scroll">
        <Outlet />
      </Box>
    </Flex>
  );
}
