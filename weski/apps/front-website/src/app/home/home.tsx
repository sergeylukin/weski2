import { useState } from 'react';
import {
  Container,
  Stack,
  useColorModeValue,
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Search2Icon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { FrontWebsiteFeatureHotelsList as HotelsList } from '@namespace/front-website/feature-hotels-list';
import { Hotel } from '@namespace/api-interfaces';
import { FrontWebsiteFeatureHotelsSearchForm as SearchForm } from '@namespace/front-website/feature-hotels-search-form';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              <img src="/assets/logo.png" width={264} height={49} alt="WeSki" />
            </Text>

            <Flex display={{ base: 'none', md: 'flex' }} ml="auto" mr={'auto'}>
              <Container maxW={'7xl'}>
                <SearchForm setHotels={setHotels} />
              </Container>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <IconButton
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'brand.500'}
              aria-label={'Toggle Navigation'}
              _hover={{
                bg: 'blue.300',
              }}
              icon={<Search2Icon w={3} h={3} />}
            />
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
          >
            <SearchForm setHotels={setHotels} />
          </Stack>
        </Collapse>
      </Box>
      <Container maxW={'7xl'}>
        <HotelsList hotels={hotels} />
      </Container>
    </>
  );
}

export default Home;
