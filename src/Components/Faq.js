import { Box, Heading, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel, } from '@chakra-ui/react';
import React from 'react';

import {GrAdd, GrClose} from 'react-icons/gr';

const Faq = () => {
    return (
        <Box px={{base: "5%", md:"7%", lg: "10%"}} py='40px'>
             <Heading color="white" mb="60px" textAlign="center">Faq</Heading>

             <Accordion defaultIndex={[0]} allowMultiple color="black" fontSize="18px">
               
                <AccordionItem border="none" bg='primary.900' py='15px' borderRadius='20px' mb="25px" _hover={{bg: '#D0BAD1'}}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            What is the mint price?
                            </Box>
                            {isExpanded ? (
                            <GrClose fontSize='25px' />
                            ) : (
                            <GrAdd fontSize='25px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Ξ 0.002 per NFT + gas.
                        <br />
                        There is no change in mint price between whitelisted and public mint
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>

                <AccordionItem border="none" bg='primary.500' py='15px' borderRadius='20px' mb="25px" _hover={{bg: 'primary.600'}}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            When will the Whitelist sale start?
                            </Box>
                            {isExpanded ? (
                            <GrClose fontSize='25px' />
                            ) : (
                            <GrAdd fontSize='25px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam minima expedita! Consequatur sunt cum minus beatae adipisci deserunt ratione ad libero iste laborum nam aut dicta, nostrum repellat molestias?
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>

                <AccordionItem border="none" bg='primary.900' py='15px' borderRadius='20px' mb="25px" _hover={{bg: '#D0BAD1'}}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            How long will the Whitelist sale be open?
                            </Box>
                            {isExpanded ? (
                            <GrClose fontSize='25px' />
                            ) : (
                            <GrAdd fontSize='25px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam minima expedita! Consequatur sunt cum minus beatae adipisci deserunt ratione ad libero iste laborum nam aut dicta, nostrum repellat molestias?
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cum odit blanditiis fuga magnam illo, numquam officia quibusdam. Quisquam accusamus omnis modi architecto quis voluptas velit nemo tenetur cupiditate beatae?
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>

                <AccordionItem border="none" bg='primary.500' py='15px' borderRadius='20px' mb="25px" _hover={{bg: 'primary.600'}}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            Is there a maximum mint limit per wallet during the whitelist mint?
                            </Box>
                            {isExpanded ? (
                            <GrClose fontSize='25px' />
                            ) : (
                            <GrAdd fontSize='25px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam minima expedita! Consequatur sunt cum minus beatae adipisci deserunt ratione ad libero iste laborum nam aut dicta, nostrum repellat molestias?
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>

                <AccordionItem border="none" bg='primary.900' py='15px' borderRadius='20px' mb="25px" _hover={{bg: '#D0BAD1'}}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            Wen Public mint start?
                            </Box>
                            {isExpanded ? (
                            <GrClose fontSize='25px' />
                            ) : (
                            <GrAdd fontSize='25px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam minima expedita! Consequatur sunt cum minus beatae adipisci deserunt ratione ad libero iste laborum nam aut dicta, nostrum repellat molestias?
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>

                <AccordionItem border="none" bg='primary.500' py='15px' borderRadius='20px' mb="25px" _hover={{bg: 'primary.600'}}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            Will Alpha Lions be minted on ERC-721A?
                            </Box>
                            {isExpanded ? (
                            <GrClose fontSize='25px' />
                            ) : (
                            <GrAdd fontSize='25px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Yes, Alpha Lions NFTs will be minted on ERC-721A.
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>
                
                <AccordionItem border="none" bg='primary.900' py='15px' borderRadius='20px' mb="25px" _hover={{bg: '#D0BAD1'}}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            Wen reveal?
                            </Box>
                            {isExpanded ? (
                            <GrClose fontSize='25px' />
                            ) : (
                            <GrAdd fontSize='25px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam minima expedita! Consequatur sunt cum minus beatae adipisci deserunt ratione ad libero iste laborum nam aut dicta, nostrum repellat molestias?
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>

                <AccordionItem border="none" bg='primary.500' py='15px' borderRadius='20px' mb="25px" _hover={{bg: 'primary.600'}}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            Can I mint from using a hardware wallet?
                            </Box>
                            {isExpanded ? (
                            <GrClose fontSize='25px' />
                            ) : (
                            <GrAdd fontSize='25px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi architecto placeat id culpa molestiae dolorem repellat qui minus. Dolores enim natus esse numquam repudiandae ipsa exercitationem laudantium odio magni reiciendis?
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>
            </Accordion>
        </Box>
    );
};

export default Faq;
