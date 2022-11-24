import { Box, Button, Center, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import styles from '../Styles/Home.module.css';
import heroImage from '../images/169.png';
import { SiEthereum, SiDiscord } from 'react-icons/si';
import { GrTwitter} from 'react-icons/gr';


const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.heroImage} src={heroImage} alt="image" />

            <Link target={'_blank'} href="https://testnets.opensea.io/collection/alpha-lions-nft-v2" position="absolute" left={{base: "20%", md:"35%", lg:"45%"}}bottom="15%" bg="primary.800" color='white' py='15px' px="25px" _hover={{textDecoration: 'none', bg:'primary.600'}} boxShadow='dark-lg'>
                View on Opensea
            </Link>

            <Flex justify="space-between" py="30px" px={{base: "5%", md:"7%", lg: "10%"}}>
                <Flex align="center">
                <Box color="primary.600" fontSize="50px">
                    <SiEthereum/>
                </Box>
                <Heading color="white" fontWeight="bold" fontSize="30px" display={{base: "none", md: "block"}}>
                    Alpha Lions
                </Heading>
                </Flex>

                <Flex align="center" gap="20px" color="black">
                    <Center boxSize="40px" border="1px" borderColor="white" fontSize="20px"  cursor="pointer">
                        <GrTwitter/>
                    </Center>

                    <Center boxSize="40px" border="1px" borderColor="white" fontSize="20px"  cursor="pointer">
                        <SiDiscord/>
                    </Center>

                    <Link target={'_blank'} href='https://nft-mint-staking-dapp.vercel.app/' _hover={{textDecoration: "none"}}>
                        <Button bg="blackAlpha.900" color="white" _hover={{bg: "blackAlpha.800"}}>
                            Mint Now
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </header>
    );
};

export default Header;