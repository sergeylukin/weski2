import styled from '@emotion/styled';
import {
  Box,
  Button,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

import { Hotel } from '@namespace/api-interfaces';

/* eslint-disable-next-line */
export interface FrontWebsiteFeatureHotelsListProps {
  hotels: Hotel[];
}

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

export function FrontWebsiteFeatureHotelsList(
  props: FrontWebsiteFeatureHotelsListProps
) {
  const { hotels } = props;

  return (
    <Container maxW={'7xl'} p="12">
      {Array.isArray(hotels) &&
        hotels.map((hotel) => (
          <Box
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
            >
              <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%"
              >
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    borderRadius="lg"
                    src={hotel.image}
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                  )}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: '3', sm: '0' }}
            >
              <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  {hotel.name}
                </Link>
              </Heading>
              <Button
                colorScheme={'brand'}
                _hover={{
                  bg: 'blue.300',
                }}
              >
                More Info
              </Button>
            </Box>
          </Box>
        ))}
    </Container>
  );
}

export default FrontWebsiteFeatureHotelsList;
