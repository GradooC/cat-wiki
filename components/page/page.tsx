import React from 'react';
import { Box } from '@chakra-ui/react';
import { LogoIcon } from '@icons/logo';

export const Page: React.FC = ({ children }) => {
    return (
        <React.Fragment>
            <header>
                <Box bg="white" w="100%" py={4} color="black">
                    <LogoIcon width={32} />
                </Box>
            </header>
            {children}
            <footer>
                <Box
                    bg="black"
                    w="100%"
                    py={4}
                    px={20}
                    color="white"
                    borderTopRadius="4xl"
                >
                    <LogoIcon width={32} />
                </Box>
            </footer>
        </React.Fragment>
    );
};
