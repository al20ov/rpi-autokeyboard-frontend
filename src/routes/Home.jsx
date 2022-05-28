import {
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import config from "../config";

export default function Home() {
  const [outputString, setOutputString] = useState("");
  const [initialDelay, setInitialDelay] = useState(1000);
  const [interval, setInterval] = useState(5);

  return (
    <Container pt={4} pb={4}>
      <VStack align="left" spacing={4}>
        <Textarea
          value={outputString}
          onChange={(e) => setOutputString(e.target.value)}
          placeholder="Write here"
          borderRadius={8}
          height="64"
          maxHeight="md"
        >
        </Textarea>
        <HStack spacing={4}>
          <VStack align="left" spacing={0}>
            <FormLabel htmlFor="delay">Initial delay</FormLabel>
            <NumberInput
              value={initialDelay}
              format={(value) => (value + "ms")}
              step={100}
              max={10000}
              onChange={(value) => setInitialDelay(value)}
              min={0}
            >
              <NumberInputField id="delay" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>
          <VStack align="left" spacing={0}>
            <FormLabel htmlFor="interval">Interval</FormLabel>
            <NumberInput
              value={interval}
              format={(value) => (value + "ms")}
              max={50}
              onChange={(e) => setInterval(e.target.value)}
              min={0}
            >
              <NumberInputField id="interval" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>
        </HStack>
        <Button
          colorScheme="green"
          onClick={() => {
            fetch(`${config.rootUrl}/write`, {
              method: "POST",
              body: JSON.stringify({
                text: outputString,
                initialDelay: 1000,
                interval: 5,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }).then((res) => res.json()).then((data) => {
              console.log(data);
            });
          }}
        >
          Send string
        </Button>
      </VStack>
    </Container>
  );
}
