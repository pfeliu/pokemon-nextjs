import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name='author' content='Pedro Feliú' />
        <meta name='description' content={`Info about pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />

        <meta property='og:title' content={`INfo about ${title}`} />
        <meta property='og:description' content={`Info about ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
