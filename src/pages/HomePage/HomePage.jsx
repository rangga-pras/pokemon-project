import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ListCard from "../../components/list_card/ListCard";

const HomePage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchPokemons = async () => {
            const promises = [];
            for (let i = 1; i <= 8; i++) {
                promises.push(
                    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json())
                );
            }
            const results = await Promise.all(promises);
            const formatted = results.map((pokemon) => ({
                id: pokemon.id,
                name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                image: pokemon.sprites.other["official-artwork"].front_default,
                sprite: pokemon.sprites.front_default,
                types: pokemon.types.map((t) => t.type.name),
                stats: pokemon.stats,
            }));
            setPokemons(formatted);
        };
        fetchPokemons();
    }, []);

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-y-4 bg-[#252A3E] min-h-screen">
            <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <ListCard pokemons={filteredPokemons} />
        </div>
    );
};

export default HomePage;
