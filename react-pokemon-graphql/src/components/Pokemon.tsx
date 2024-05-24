import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POKEMON = gql`
    query GetPokemon {
        pokemon_v2_pokemon(limit: 10) {
        id
        name
        height
        weight
        }
    }
`;

const Pokemon: React.FC = () => {
    const { loading, error, data } = useQuery(GET_POKEMON);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Pokémon List</h1>
            <ul>
                {data.pokemon_v2_pokemon.map((pokemon: any) => (
                    <li key={pokemon.id}>
                        {pokemon.name} (Height: {pokemon.height}, Weight: {pokemon.weight})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pokemon;
