import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const Roadmap = () => {
    return (
        <Box px={{base: "5%", md:"7%", lg: "10%"}} py='40px'>
            <Heading color="white" mb="60px" textAlign="center">Roadmap</Heading>

            <Box>description</Box>
        </Box>
    );
};

export default Roadmap;