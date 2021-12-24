import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fontSizes: {},
  styles: {
    global: {
      body: {
        bg: "#e6e9f0",
        color: "black",
        fontFamily: "Lato",
      },
    },
  },
});
