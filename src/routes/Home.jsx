import {
  Button,
  ButtonGroup,
  Container,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import config from "../config";

export default function Home() {
  const [outputString, setOutputString] = useState("");

  return (
    <Container pt={4} pb={4}>
      <VStack align="left">
        <ButtonGroup>
          <Button
            onClick={() => {
              fetch(`${config.rootUrl}/write`, {
                method: "POST",
                body: JSON.stringify({
                  text: outputString,
                  initialDelay: 1000,
                  interval: 5
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
        </ButtonGroup>
        <Textarea
          value={outputString}
          onChange={(e) => setOutputString(e.target.value)}
          placeholder="Write here"
          borderRadius={8}
          height="md"
        >
        </Textarea>
      </VStack>
    </Container>
  );
}
