import { Box, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import aboutImage from '../images/animate.gif';

const About = () => {
    return (
        <Box my="100px" px={{base: "5%", lg: "10%"}}>
            <Heading color="white" mb="60px" textAlign="center">About</Heading>
            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap="30px">
                <Stack spacing="25px" order={{base: '2', md:'1'}} fontSize="17px">
                    <Box fontSize="30px" fontWeight="black">
                    <Text bgGradient='linear(to-r, primary.500, primary.600)' bgClip='text'>333 unique Alpha Lions</Text>
                    <Text color="white">who need Drivers.</Text>
                    </Box>

                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea hic optio necessitatibus.
                    </Text>

                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea hic optio necessitatibus. Similique fugiat praesentium pariatur et sapiente, in ducimus, soluta accusamus saepe ullam eius nemo voluptatum facilis ab nostrum.
                    </Text>
                </Stack>

                <Box order={{base: '1', md:'2'}}>
                    <Image src={aboutImage}/>
                </Box>
            </Grid>
        </Box>
    );
};

export default About;