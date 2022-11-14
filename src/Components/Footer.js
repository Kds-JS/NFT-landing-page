import { Box, Flex, Heading, Text, Center } from '@chakra-ui/react';
import React from 'react';
import { SiEthereum, SiDiscord } from 'react-icons/si';
import { GrTwitter} from 'react-icons/gr';

const Footer = () => {
    return (
        <Box py='50px' px={{base: "5%", md:"7%", lg: "10%"}}>
            <Flex justify="space-between" gap='15px'>
                <Box>
                    <Flex align="center">
                    <Box color="primary.600" fontSize="50px">
                        <SiEthereum/>
                    </Box>
                    <Heading color="white" fontWeight="bold" fontSize="30px">
                        Alpha Lions
                    </Heading>
                    </Flex>

                    <Text color='#87898C' fontSize="18px" mt='10px'>
                        333 unique Alpha Lions who need drivers
                    </Text>

                    <Text mt='60px'>
                    ©2022 Alpha Lions. All rights reserved
                    </Text>
                </Box>

                <Box fontSize="18px">
                    <Text color='white'>
                        Home
                    </Text>

                    <Text color="primary.900">
                        Team
                    </Text>

                    <Text color="primary.900">
                        Terms & Conditions
                    </Text>

                    <Flex mt='50px' align="center" gap="20px" color="white">
                    <Center boxSize="40px" border="1px" borderColor="#20256B" fontSize="20px"  cursor="pointer">
                        <GrTwitter/>
                    </Center>

                    <Center boxSize="40px" border="1px" borderColor="#20256B" fontSize="20px"  cursor="pointer">
                        <SiDiscord/>
                    </Center>
                </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default Footer;