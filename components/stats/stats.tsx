import { Box, HStack, Text } from '@chakra-ui/react';
import { capitalize } from 'lodash';
import React from 'react';

type Props = {
    statName: string;
    statIndex: number;
};

export const Stats: React.FC<Props> = ({ statName, statIndex }) => {
    const formatName = (name: string) => capitalize(name.replace('_', ' '));
    return (
        <HStack spacing={2}>
            <Text fontWeight="semibold" w={40}>
                {formatName(statName)}:
            </Text>
            {[1, 2, 3, 4, 5].map((index) => (
                <Box
                    key={index}
                    w={16}
                    h={3}
                    borderRadius="full"
                    bgColor={index <= statIndex ? 'primary.dark' : 'gray.200'}
                />
            ))}
        </HStack>
    );
};
