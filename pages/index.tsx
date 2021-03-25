import React, { ChangeEventHandler, useState } from 'react';
import Link from 'next/link';
import {
    Box,
    GridItem,
    Heading,
    Text,
    VStack,
    Wrap,
    Grid,
    Stack,
} from '@chakra-ui/layout';
import {
    Button,
    Flex,
    Icon,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Popover,
    PopoverContent,
} from '@chakra-ui/react';
import { ArrowRightAlt, Search } from '@material-ui/icons';
import { Page } from '@components/page';
import { BreedType } from '@dataTypes/breed';
import { GetStaticProps } from 'next';
import { CatBreedItem } from '@components/cat-breed-item';
import { LogoIcon } from '@icons/logo';
import { api } from '@utils/api';
import { isEmpty } from 'lodash';
import { toPath } from '@utils/toPath';

type Props = {
    breeds: BreedType[];
};

const Home: React.FC<Props> = ({ breeds }) => {
    const [value, setValue] = useState('');
    const [foundBreeds, setFoundBreeds] = useState([]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const filteredBreeds = breeds.filter(({ name }) =>
            new RegExp(e.target.value, 'i').test(name)
        );
        setFoundBreeds(filteredBreeds);
        setValue(e.target.value);
    };

    return (
        <Page>
            <section style={{ position: 'relative' }}>
                <Image
                    src="/HeroImagelg.png"
                    alt="main cat image"
                    borderTopRadius="4xl"
                />
                <Box
                    position="absolute"
                    top="20%"
                    left={20}
                    w="35%"
                    color="white"
                >
                    <LogoIcon w="80%" />
                    <Text fontSize="2xl">
                        Get to know more about your cat breed
                    </Text>
                    <InputGroup
                        size="lg"
                        color="gray.800"
                        mt={{ base: 10, xl: 20 }}
                    >
                        <Input
                            bgColor="white"
                            borderRadius="full"
                            placeholder="Enter your breed"
                            _focus={{ bgColor: 'white' }}
                            onChange={handleChange}
                            value={value}
                        />
                        <InputRightElement children={<Icon as={Search} />} />
                    </InputGroup>
                    <Popover
                        isOpen={!isEmpty(foundBreeds) && !isEmpty(value)}
                        autoFocus={false}
                    >
                        <PopoverContent
                            color="gray.800"
                            borderRadius="3xl"
                            mt={5}
                            maxH={60}
                            p={3}
                        >
                            <VStack
                                overflowY="scroll"
                                align="start"
                                sx={{
                                    '&::-webkit-scrollbar': {
                                        w: 1,
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        bgColor: 'gray.200',
                                        borderRadius: 'full',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        borderRadius: 'full',
                                        bgColor: 'gray.400',
                                    },
                                }}
                            >
                                {foundBreeds.map(({ name, id }) => (
                                    <Link href={`/breeds/${toPath(name)}`}>
                                        <Box
                                            w="95%"
                                            p={3}
                                            key={id}
                                            borderRadius="xl"
                                            _hover={{ bgColor: 'gray.100' }}
                                        >
                                            <Text fontWeight="semibold">
                                                {name}
                                            </Text>
                                        </Box>
                                    </Link>
                                ))}
                            </VStack>
                        </PopoverContent>
                    </Popover>
                </Box>
            </section>
            <section>
                <Box
                    px={20}
                    pt={10}
                    pb={20}
                    bgColor="primary.light"
                    borderBottomRadius="4xl"
                >
                    <Box mb={15}>
                        <Text fontSize="18px">Most Searched Breeds</Text>
                        <Box borderTop="2px" width="6xs"></Box>
                    </Box>
                    <Flex pb={10}>
                        <Heading fontSize="48px" width="50%">
                            66+ Breeds For you to discover
                        </Heading>
                        <Flex align="flex-end" justify="flex-end" width="50%">
                            <Flex>
                                <Text casing="uppercase" fontWeight="bold">
                                    see more
                                </Text>
                                <ArrowRightAlt />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Box>
                        <Wrap spacing={5} justify="space-between">
                            {breeds
                                .filter((_, index) => index < 6)
                                .map(({ id, name, image: { url } }) => (
                                    <CatBreedItem
                                        key={id}
                                        url={url}
                                        name={name}
                                    />
                                ))}
                        </Wrap>
                    </Box>
                </Box>
            </section>
            <section>
                <Stack
                    m={16}
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={8}
                    align="center"
                    justify="center"
                >
                    <VStack align="flex-start">
                        <Box borderTop="2px" width="6xs"></Box>
                        <Heading size="4xl" mb={10}>
                            Why should you have a cat?
                        </Heading>
                        <Text mb={10}>
                            Having a cat around you can actually trigger the
                            release of calming chemicals in your body which
                            lower your stress and anxiety levels
                        </Text>
                        <Flex>
                            <Text textTransform="uppercase" fontWeight="bold">
                                read more
                            </Text>
                            <ArrowRightAlt />
                        </Flex>
                    </VStack>

                    <Grid
                        gap={4}
                        gridTemplateColumns="1fr 2.6fr 3.2fr"
                        gridTemplateRows="1.6fr 1.8fr 1fr"
                    >
                        <GridItem colSpan={2}>
                            <Image src="/image 2.png"></Image>
                        </GridItem>
                        <GridItem rowSpan={2}>
                            <Image src="/image 3.png"></Image>
                        </GridItem>
                        <GridItem colStart={2} rowSpan={2}>
                            <Image src="/image 1.png"></Image>
                        </GridItem>
                    </Grid>
                </Stack>
            </section>
            <section></section>
        </Page>
    );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const breeds = await api.getAllBreeds();

    return {
        props: { breeds },
    };
};

export default Home;
