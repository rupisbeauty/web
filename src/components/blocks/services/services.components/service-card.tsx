import {
  AspectRatio,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import type {
  CategoriesBlocksServiceMenu,
  CategoriesBlocksServiceMenuRelatedServices,
} from '.tina';

import { truncate } from '@/utils';
import { ServiceBadges } from './service-option-badges';

export const ServiceCard: React.FC<
  CategoriesBlocksServiceMenuRelatedServices & { category?: string }
> = (props) => {
  const serviceOptions: CategoriesBlocksServiceMenu | null | undefined =
    props?.service?.blocks
      ?.map((block) => {
        if (block?.__typename == 'CategoriesBlocksServiceMenu') {
          return block;
        }
        return null;
      })
      .filter(Boolean)[0];

  const hasOptions = !!serviceOptions?.options?.length;
  const hasServices = !!serviceOptions?.relatedServices?.length;
  const serviceLink = props?.category
    ? `/services/${props?.category}/${props.service?.slug}`
    : `/services/${props.service?.slug}`;

  return (
    <Stack layerStyle="card.default" direction={{ base: 'column', md: 'row' }}>
      <Flex layerStyle="card.header" borderLeftRadius="xl">
        {props?.service?.image ? (
          <AspectRatio boxSize="100%">
            <Image
              fill={true}
              src={String(props?.service?.image?.src)}
              alt={String(props?.service?.image?.alt)}
              style={{
                objectFit: 'cover',
                objectPosition: String(
                  props?.service?.image?.pos?.objectPosition
                ),
                transform: String(props?.service?.image?.pos?.transform),
              }}
            />
          </AspectRatio>
        ) : null}
      </Flex>
      <Stack layerStyle="card.body" h="full">
        {props.service?.title ? (
          <Text as="h3" px={3} textStyle="card.title" data-tinafield="title">
            {props.service?.title}
          </Text>
        ) : null}

        {props.service?.description ? (
          <Text color="gray.700" px={3} data-tinafield="description">
            {truncate(props?.service?.description, 175)}
          </Text>
        ) : null}

        {hasOptions || hasServices ? (
          <>
            <ServiceBadges
              data={serviceOptions}
              hasOptions={hasOptions}
              hasServices={hasServices}
            />
            <Stack
              as={ButtonGroup}
              direction="row"
              w="full"
              mt={'auto'}
              align="center"
              alignSelf="flex-end"
              flex={0}
            >
              <Button
                as={Link}
                href={encodeURI(serviceLink)}
                flex={1}
                fontSize={'sm'}
                colorScheme="teal"
                _focus={{
                  bg: 'gray.200',
                }}
              >
                See Options
              </Button>
            </Stack>
          </>
        ) : null}
      </Stack>
    </Stack>
  );
};
