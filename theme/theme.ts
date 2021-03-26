import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                marginX: 20,
                color: '#291507',
            },
        },
    },
    fonts: {
        body: "'Montserrat', sans-serif",
        heading: "'Montserrat extrabold', sans-serif",
    },
    colors: {
        primary: {
            light: '#E3E1DC',
            medium: '#DEC68B',
            dark: '#544439',
        },
    },
    radii: {
        '4xl': '2rem',
    },
    sizes: {
        '6xs': '4rem',
    },
});
