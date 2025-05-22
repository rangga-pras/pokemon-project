import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ pokemon }) => {
    const navigate = useNavigate();
    const { id, name, image, types } = pokemon;

    const handleClick = () => {
        navigate(`/detail/${id}`, { state: { pokemonData: pokemon } });
    };

    return (
        <div
            onClick={handleClick}
            className="bg-white text-gray-900 rounded-xl p-4 shadow-md cursor-pointer hover:scale-105 transition-transform"
        >
            <img
                src={image}
                alt={name}
                className="w-full h-40 object-contain mb-4"
            />
            <p className="text-center text-xl font-bold">{name}</p>
            <div className="flex justify-center gap-2 mt-2 flex-wrap">
                {types.map((type) => (
                    <span
                        key={type}
                        className={`px-3 py-1 text-sm font-medium rounded-full text-white ${
                            type === "grass"
                                ? "bg-green-500"
                                : type === "poison"
                                ? "bg-purple-500"
                                : type === "fire"
                                ? "bg-red-500"
                                : type === "water"
                                ? "bg-blue-500"
                                : type === "electric"
                                ? "bg-yellow-400 text-black"
                                : type === "bug"
                                ? "bg-lime-600"
                                : type === "normal"
                                ? "bg-gray-400"
                                : type === "ground"
                                ? "bg-yellow-800"
                                : "bg-gray-600"
                        }`}
                    >
                        {type}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Card;
