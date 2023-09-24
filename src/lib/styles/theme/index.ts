import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    black: "#000000",
    white: "#ffffff",
    gold: "#FFD700",
  },
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "black",
      },
    },
  },
  components: {
    // ChakraCard: {
    //   baseStyle: {
    //     body: {
    //       background: "#111111", // Set the off-black background color for the card body
    //       color: "white", // Set text color to white
    //     },
    //   },
    // },
  },
});
