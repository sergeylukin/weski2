import { Heading } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface UiSharedProps {}

export function UiShared(props: UiSharedProps) {
  return (
    <Heading as="h1" size="3xl">
      Welcome to UiShared!
    </Heading>
  );
}

export default UiShared;
