import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { motion} from "framer-motion";


const Roadmap = () => {
    return (
        <Box px={{base: "5%", md:"7%", lg: "10%"}} py={{base: '70px', md:'150px'}}>
            <Heading color="white" mb="60px" textAlign="center">Roadmap</Heading>

            <Box position="relative">

                <Box h="100%" position="absolute" left={{base: '10px', md:'50%'}} top="25px" w="4px" bg="white"></Box>

                <Flex justify="flex-start" position="relative" as={motion.div}    
                 initial={{
                    opacity: 0,
                    translateX: -100,
                  }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0}}
                  transition={{ duration: 5, delay:  2}} 
                >

                    <Center boxSize="40px" bg="primary.500" borderRadius="full" position="absolute" top="20px" left={{base: "-6px", md:"47.5%", lg:"47.8%", xl: "48.5%"}} border="4px" borderColor="white" ></Center>
                    <Box w={{base: '100%', md: "45%"}} bg="#151515" borderRadius="20px" boxShadow="dark-lg" py="25px" px="20px" ml={{base: "45px", md:"0"}} mb={{base: "25px", md:"0"}}>
                        <Flex justify="space-between" align="center">
                            <Text fontSize="20px" fontWeight="bold" color="white">DAO & Reward System</Text>
                            <Button bg="white" color="black" _hover={{bg: "white"}}>Q4 2022</Button>
                        </Flex>
                        <Text mt="25px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum recusandae perspiciatis saepe molestias! Facere accusamus veniam quas officia aliquid similique, ducimus debitis id eum saepe nemo fugiat nam animi.</Text>
                    </Box>
                </Flex>

                <Flex justify="flex-end" position="relative" as={motion.div}    
                 initial={{
                    opacity: 0,
                    translateX: -100,
                  }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0}}
                  transition={{ duration: 5, delay:  2}} >
                    <Center boxSize="40px" bg="primary.500" borderRadius="full" position="absolute" top="20px" left={{base: "-6px", md:"47.5%", lg:"47.8%", xl: "48.5%"}} border="4px" borderColor="white" ></Center>
                    <Box w={{base: '100%', md: "45%"}} bg="#151515" borderRadius="20px" boxShadow="dark-lg" py="25px" px="20px"  ml={{base: "45px", md:"0"}} mb={{base: "25px", md:"0"}}>
                        
                        <Flex justify="space-between" align="center">
                            <Text fontSize="20px" fontWeight="bold" color="white">NFT Launchpad</Text>
                            <Button bg="white" color="black" _hover={{bg: "white"}}>Q1 2023</Button>
                        </Flex>
                        <Text mt="25px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum recusandae perspiciatis saepe molestias!.</Text>
                    </Box>
                </Flex>

                <Flex justify="flex-start" position="relative" as={motion.div}    
                 initial={{
                    opacity: 0,
                    translateX: -100,
                  }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0}}
                  transition={{ duration: 5, delay:  2}}>
                    <Center boxSize="40px" bg="primary.500" borderRadius="full" position="absolute" top="20px" left={{base: "-6px", md:"47.5%", lg:"47.8%", xl: "48.5%"}} border="4px" borderColor="white" ></Center>
                    <Box w={{base: '100%', md: "45%"}} bg="#151515" borderRadius="20px" boxShadow="dark-lg" py="25px" px="20px" ml={{base: "45px", md:"0"}} mb={{base: "25px", md:"0"}}>
                        <Flex justify="space-between" align="center">
                            <Text fontSize="20px" fontWeight="bold" color="white">Alpha Lions Club Shop</Text>
                            <Button bg="white" color="black" _hover={{bg: "white"}}>Q2 2023</Button>
                        </Flex>
                        <Text mt="25px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolore. Ex est placeat eius mollitia voluptatibus ducimus eveniet sint sapiente, voluptates!</Text>
                    </Box>
                </Flex>

                <Flex justify="flex-end" position="relative" as={motion.div}    
                 initial={{
                    opacity: 0,
                    translateX: -100,
                  }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0}}
                  transition={{ duration: 5, delay:  2}}>
                    <Center boxSize="40px" bg="primary.500" borderRadius="full" position="absolute" top="20px" left={{base: "-6px", md:"47.5%", lg:"47.8%", xl: "48.5%"}} border="4px" borderColor="white" ></Center>
                    <Box w={{base: '100%', md: "45%"}} bg="#151515" borderRadius="20px" boxShadow="dark-lg" py="25px" px="20px"  ml={{base: "45px", md:"0"}} mb={{base: "25px", md:"0"}}>
                        
                        <Flex justify="space-between" align="center">
                            <Text fontSize="20px" fontWeight="bold" color="white">3D & Augmented Reality NFT Artwork</Text>
                            <Button bg="white" color="black" _hover={{bg: "white"}}>Q3 2023</Button>
                        </Flex>
                        <Text mt="25px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic cupiditate. Veritatis minus, dolorum veniam quos quia perspiciatis, excepturi maxime dicta, laudantium error adipisci! Quaerat, delectus! Aut temporibus porro rerum?</Text>
                    </Box>
                </Flex>

                <Flex justify="flex-start" position="relative" as={motion.div}    
                 initial={{
                    opacity: 0,
                    translateX: -100,
                  }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0}}
                  transition={{ duration: 5, delay:  2}}>
                    <Center boxSize="40px" bg="primary.500" borderRadius="full" position="absolute" top="20px" left={{base: "-6px", md:"47.5%", lg:"47.8%", xl: "48.5%"}} border="4px" borderColor="white" ></Center>
                    <Box w={{base: '100%', md: "45%"}} bg="#151515" borderRadius="20px" boxShadow="dark-lg" py="25px" px="20px" ml={{base: "45px", md:"0"}} mb={{base: "25px", md:"0"}}>
                        <Flex justify="space-between" align="center">
                            <Text fontSize="20px" fontWeight="bold" color="white">Totally Orbital</Text>
                            <Button bg="white" color="black" _hover={{bg: "white"}}>Q4 2023</Button>
                        </Flex>
                        <Text mt="25px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum recusandae perspiciatis saepe molestias! Facere accusamus veniam quas officia aliquid similique, ducimus debitis id eum saepe nemo fugiat nam animi.</Text>
                    </Box>
                </Flex>

                <Flex justify="flex-end" position="relative" as={motion.div}    
                 initial={{
                    opacity: 0,
                    translateX: -100,
                  }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0}}
                  transition={{ duration: 5, delay:  2}}>
                    <Center boxSize="40px" bg="primary.500" borderRadius="full" position="absolute" top="20px" left={{base: "-6px", md:"47.5%", lg:"47.8%", xl: "48.5%"}} border="4px" borderColor="white" ></Center>
                    <Box w={{base: '100%', md: "45%"}} bg="#151515" borderRadius="20px" boxShadow="dark-lg" py="25px" px="20px"  ml={{base: "45px", md:"0"}} mb={{base: "25px", md:"0"}}>
                        
                        <Flex justify="space-between" align="center">
                            <Text fontSize="20px" fontWeight="bold" color="white">What's next?</Text>
                            <Button bg="white" color="black" _hover={{bg: "white"}}>After</Button>
                        </Flex>
                        <Text mt="25px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum voluptatum autem nulla officia dolorem odio!</Text>
                    </Box>
                </Flex>
                
            </Box>
        </Box>
    );
};

export default Roadmap;