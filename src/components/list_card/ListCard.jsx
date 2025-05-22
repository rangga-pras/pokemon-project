import React from "react";
import Card from "../card/Card";

const ListCard = ({ pokemons }) => {
    return (
        <div className="mx-5 mb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pokemons.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default ListCard;
