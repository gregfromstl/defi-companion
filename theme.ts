import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
  configs: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        color: "white",
        backgroundColor: 'black',
        fontSize: "14px",
      },
    },
  },
});
