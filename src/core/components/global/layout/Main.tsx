import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

function Main({ children }: Props) {
  return (
    <Flex w="full">
      {/* <Navbar /> */}

      <Box
        w="90vw"
        // pb="40px"
        zIndex="0"
      >
        <AnimatePresence mode="wait" initial={false}>
          {children}
        </AnimatePresence>
      </Box>

      {/* <Footer /> */}
    </Flex>
  );
}

export default Main;
