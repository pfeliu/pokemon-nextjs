import { Grid } from '@nextui-org/react';
import { NextPage, GetStaticProps } from 'next';
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { PokemonListResponse, SamllPokemon } from '../../interfaces';
import { PokemonCard } from '../../components/pokemon';

interface Props {
  pokemons: SamllPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title='Pokemon List'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);

  console.log(data);

  const pokemons: SamllPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
