import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POKEMON = gql`
    query GetPokemon {
        pokemon_v2_pokemon(limit: 9) {
        id
        name
        height
        weight
        }
    }
`;

const Pokemon: React.FC = () => {
    const { loading, error, data } = useQuery(GET_POKEMON);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Pokémon List</h1>
            <ul className="divide-y divide-gray-200">
                {data.pokemon_v2_pokemon.map((pokemon: any) => (
                    <li key={pokemon.id} className="py-4 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                alt={pokemon.name}
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-lg font-medium text-gray-900 capitalize">{pokemon.name}</p>
                            <p className="text-sm text-gray-500">Height: {pokemon.height}, Weight: {pokemon.weight}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pokemon;
