import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { fonts } from '@styles/font-face';
import { theme } from '@theme/theme';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Global styles={fonts} />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
export default MyApp;
