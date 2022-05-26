import React from "react";
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
// import {
//   mode
// } from "@chakra-ui/theme-tools";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page from "./Page";
import Home from "./routes/Home";
import System from "./routes/System";

// const styles = {
//   global: props => ({
//     body: {
//       bg: mode("white", "#111")(props),
//     }
//   }),
// };

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`,
  },
  // styles
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route path="/" element={<Home />} />
            <Route path="/system" element={<System />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
