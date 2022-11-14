import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import bgTeam from '../images/bgTeam.png';
import img1 from '../images/34.png';
import img2 from '../images/326.png';
import img3 from '../images/105.png';
import img4 from '../images/151.png';

const Team = () => {
    return (
        <Box px={{base: "5%", md:"7%", lg: "10%"}} py='40px' bgGradient='linear(to-tr, primary.900, primary.500)'>
            <Heading color="white" mb="60px" textAlign="center">Team</Heading>

            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)'}} gap="30px">

                <Box boxShadow="md" h='350px' bgGradient='linear(to-r, secondary.800, primary.900)' border="2px" borderColor="white" borderRadius="25px">
                    <Image src={img1} h="75%" w="100%" objectFit="cover" px="15px" bgImage={bgTeam} borderRadius="25px 25px 0 0"/>

                    <Box py="10px" h='25%' color="white" textAlign="center" fontSize="20px" >
                        <Text fontWeight="bold">
                         KDS
                        </Text>

                        <Text>
                        Smart Contract Developer
                        </Text>
                    </Box>
                </Box>

                <Box boxShadow="md" h='350px' bgGradient='linear(to-r, secondary.800, primary.900)' border="2px" borderColor="white" borderRadius="25px">
                    <Image src={img2} h="75%" w="100%" objectFit="cover" px="15px" bgImage={bgTeam} borderRadius="25px 25px 0 0"/>

                    <Box py="10px" h='25%' color="white" textAlign="center" fontSize="20px" >
                        <Text fontWeight="bold">
                         JULIAN
                        </Text>

                        <Text>
                        web3 Developer
                        </Text>
                    </Box>
                </Box>

                <Box boxShadow="md" h='350px' bgGradient='linear(to-r, secondary.800, primary.900)' border="2px" borderColor="white" borderRadius="25px">
                    <Image src={img3} h="75%" w="100%" objectFit="cover" px="15px" bgImage={bgTeam} borderRadius="25px 25px 0 0"/>

                    <Box py="10px" h='25%' color="white" textAlign="center" fontSize="20px" >
                        <Text fontWeight="bold">
                         KARL
                        </Text>

                        <Text>
                        2D & 3D Designer
                        </Text>
                    </Box>
                </Box>

                <Box boxShadow="md" h='350px' bgGradient='linear(to-r, secondary.800, primary.900)' border="2px" borderColor="white" borderRadius="25px">
                    <Image src={img4} h="75%" w="100%" objectFit="cover" px="15px" bgImage={bgTeam} borderRadius="25px 25px 0 0"/>

                    <Box py="10px" h='25%' color="white" textAlign="center" fontSize="20px" >
                        <Text fontWeight="bold">
                         KYLIAN
                        </Text>

                        <Text>
                        Business Developer
                        </Text>
                    </Box>
                </Box>


            </Grid>
        </Box>
    );
};

export default Team;