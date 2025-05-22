import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const DetailPage = () => {
    const location = useLocation();
    const { pokemonData } = location.state || {};

    const navigate = useNavigate();

    if (!pokemonData) return <p className="text-white text-center mt-10">Data tidak tersedia</p>;

    const stats = pokemonData.stats || [];
    const getStat = (statName) => {
        const found = stats.find((s) => s.stat.name === statName);
        return found ? found.base_stat : "N/A";
    };

    return (
        <div className="flex flex-col gap-y-3 bg-[#252A3E] min-h-screen pb-5">
            <Navbar />
            <div className="mx-6 mt-4">
                <button
                    onClick={() => navigate("/")}
                    className="text-sm text-white px-3 py-1 rounded-md bg-[#3D4466] hover:bg-[#58607f] transition-colors">
                    ← Back
                </button>
            </div>
            <div className="flex flex-row mx-6 mt-4">
                <p className="text-lg text-gray-400">#{pokemonData.id}</p>
            </div>
            <img
                src={pokemonData.image}
                alt={pokemonData.name}
                className="w-2/4 h-auto mx-auto"
            />
            <div className="flex flex-row mx-6 items-center justify-between">
                <p className="text-4xl font-bold text-white">{pokemonData.name}</p>
                <img
                    src={pokemonData.sprite}
                    alt={`${pokemonData.name} pixel`}
                    className="w-16 h-16 scale-125 drop-shadow-md"
                />
            </div>

            <div className="flex flex-col mx-6 p-5 bg-[#05091B] rounded-lg mt-4">
                <div className="grid grid-cols-2 gap-y-4 text-white">
                    <div className="flex flex-col mb-6">
                        <p className="text-base text-[#97A0CC] mb-1">Health</p>
                        <div className="w-full h-[6px] bg-[#3D4466] rounded-full overflow-hidden mb-1">
                            <div
                            className="h-full bg-gradient-to-r from-[#6CF0A1] to-[#2AE3B7] rounded-full transition-all duration-300"
                            style={{ width: `${(getStat("hp") / 255) * 100}%` }} // 255 adalah max base stat HP di PokeAPI
                            />
                        </div>
                        <div className="flex flex-row text-white gap-x-2 items-center">
                            <p className="text-2xl font-bold">{getStat("hp")}</p>
                            <p className="text-base font-medium">from 255</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-base text-[#97A0CC]">Attack</p>
                        <p className="text-2xl font-bold">{getStat("attack")}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-base text-[#97A0CC]">Defense</p>
                        <p className="text-2xl font-bold">{getStat("defense")}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-base text-[#97A0CC]">Speed</p>
                        <p className="text-2xl font-bold">{getStat("speed")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
