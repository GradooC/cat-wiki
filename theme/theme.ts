import { extendTheme } from '@chakra-ui/react';
import { CustomInput } from './input';

// const Button = {
//     // The styles all button have in common
//     baseStyle: {
//         fontWeight: 'bold',
//         textTransform: 'uppercase',
//     },
//     // Two sizes: sm and md
//     sizes: {
//         sm: {
//             fontSize: '12px',
//             padding: '16px',
//         },
//         md: {
//             fontSize: '16px',
//             padding: '24px',
//         },
//     },
//     // Two variants: outline and solid
//     variants: {
//         outline: {
//             border: '2px solid',
//             borderColor: 'green.500',
//         },
//         solid: {
//             bg: 'green.500',
//             color: 'white',
//         },
//     },
//     // The default size and variant values
//     defaultProps: {
//         size: 'md',
//         variant: 'outline',
//     },
// };

// const Input = {
//     parts: ['field'],
//     baseStyle: {
//         field: {
//             bg: 'white',
//             color: 'blue.400',
//         },
//     },
//     defaultProps: {
//         variant: 'unstyled',
//     },
// };

export const theme = extendTheme({
    // components: {
    //     // Input,
    //     Button,
    // },
    styles: {
        global: {
            body: {
                marginX: 20,
            },
        },
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
