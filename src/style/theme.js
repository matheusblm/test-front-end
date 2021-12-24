import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fontSizes: {},
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
        fontFamily: "Lato",
      },
    },
  },
});
