import { Theme, StyleProps } from '@chakra-ui/react';

type CustomInputType = Partial<Theme['components']['Input']>;

const baseStyle: StyleProps = {
    bg: 'white',
    p: 200,
    borderRadius: '3xl'
};

export const CustomInput = {
    baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      // Two sizes: sm and md
      sizes: {
        sm: {
          fontSize: "12px",
          padding: "16px",
        },
        md: {
          fontSize: "16px",
          padding: "24px",
        },
      },
      // Two variants: outline and solid
      variants: {
        outline: {
          border: "2px solid",
          borderColor: "green.500",
        },
        solid: {
          bg: "green.500",
          color: "white",
        },
      },
      // The default size and variant values
      defaultProps: {
        size: "md",
        variant: "outline",
      },
};
