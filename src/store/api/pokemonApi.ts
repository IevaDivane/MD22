import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type SinglePokemonResponse = {
  moves:{
    move: {
    name:string
    url:string
     }
  }[]
  id:number
  weight:number
  height:number
  name:string
}

type AllPokemonsResponse = {
  count: number
  next: string
  previous: null | string
  results: {
    name: string
    url: string
  }[]
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<AllPokemonsResponse, void>({
      query: () => 'pokemon',
    }),
    getPokemonByName: builder.query<SinglePokemonResponse, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetAllPokemonsQuery } = pokemonApi;

export default pokemonApi;
