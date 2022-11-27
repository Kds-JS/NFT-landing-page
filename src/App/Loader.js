import { Flex } from '@chakra-ui/react';
import React from 'react';
import styles from '../Styles/Home.module.css';

const Loader = () => {
    return (
        <Flex h="100vh" align="center" justify="center">
            <div className={styles.basic}>
            </div>
        </Flex>
    );
};

export default Loader;