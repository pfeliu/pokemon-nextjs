import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.blue500.value,
      }}
    >
      <NextLink href='/' passHref>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Image
            src={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            }
            alt='Icon app'
            width={70}
            height={70}
          />
          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okémon
          </Text>
        </div>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <Link href={'/favorites'} as={NextLink}>
        <Text color='white'>Favs</Text>
      </Link>
    </div>
  );
};
