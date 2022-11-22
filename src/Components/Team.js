import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import bgTeam from '../images/bgTeam.png';
import img1 from '../images/34.png';
import img2 from '../images/326.png';
import img3 from '../images/105.png';
import img4 from '../images/151.png';

import { motion } from 'framer-motion';

const Team = () => {

    const team = [
        {
            name: 'KDS',
            img: img1,
            job: 'Smart Contract Developer'
        },
        {
            name: 'JULIAN',
            img: img2,
            job: 'Frontend Developer'
        },
        {
            name: 'KARL',
            img: img3,
            job: '2D & 3D Designer'
        },
        {
            name: 'KYLIAN',
            img: img4,
            job: 'Business Developer'
        }
    ]


    return (
        <Box px={{base: "5%", md:"7%", lg: "10%"}} py='40px' bgGradient='linear(to-tr, primary.900, primary.500)'>
            <Heading color="white" mb="60px" textAlign="center">Team</Heading>

            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)'}} gap="30px">

                {team.map((member, index) => (

                <Box key={index} boxShadow="md" h='350px' bgGradient='linear(to-r, secondary.800, primary.900)' border="2px" borderColor="white" borderRadius="25px" as={motion.div}
                initial={{ opacity: 0, y: 20}}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.2 * (index + 1)
                    }}
                >
                    <Box h="75%" overflow="hidden" borderRadius="25px 25px 0 0">
                    <Image src={member.img} w="100%" h="100%" objectFit="cover" px="15px" bgImage={bgTeam} borderRadius="25px 25px 0 0" transform="scale(1)"
                    transition= "0.3s ease-in-out"
                    _hover={{transform: "scale(1.1)"}}/>
                    </Box>

                    <Box py="10px" h='25%' color="white" textAlign="center" fontSize="20px" >
                        <Text fontWeight="bold">
                            {member.name}
                        </Text>

                        <Text>
                            {member.job}
                        </Text>
                    </Box>
                </Box>

                ))}

            </Grid>
        </Box>
    );
};

export default Team;