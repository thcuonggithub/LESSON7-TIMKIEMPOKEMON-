import { useState } from "react";
import "./App.css"
import Card from "./components/Card";
import Modal from "./components/Modal";

const data = [
  { id: "#0001", name: "Bulbasaur", types: ["Grass", "Poison"], image: "./001.png" },
  { id: "#0002", name: "Ivysaur", types: ["Grass", "Poison"], image: "./002.png" },
  { id: "#0003", name: "Venusaur", types: ["Grass", "Poison"], image: "./003.png" },
  { id: "#0004", name: "Charmander", types: ["Fire"], image: "./004.png" },
  { id: "#0005", name: "Charmeleon", types: ["Fire"], image: "./005.png" },
  { id: "#0006", name: "Charizard", types: ["Fire", "Flying"], image: "./006.png" },
  { id: "#0007", name: "Squirtle", types: ["Water"], image: "./007.png" },
  { id: "#0008", name: "Wartortle", types: ["Water"], image: "./008.png" },
  { id: "#0009", name: "Blastoise", types: ["Water"], image: "./009.png" },
  { id: "#0010", name: "Caterpie", types: ["Bug"], image: "./010.png" },
  { id: "#0011", name: "Metapod", types: ["Bug"], image: "./011.png" },
  { id: "#0012", name: "Butterfree", types: ["Bug", "Flying"], image: "./012.png" },
];

const App = () => {
  const [pokData, setPokData] = useState(data);
  const [crrData, setCrrData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(data);

  const handleSave = (updatedPokemon) => {
    const updatedPokData = pokData.map((pokemon) =>
      pokemon.id === updatedPokemon.id ? updatedPokemon : pokemon
    );
    setPokData(updatedPokData);

    const filtered = updatedPokData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);

    setCrrData(null);
  };

  const handleSearch = () => {
    const filtered = pokData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  let showModal = null;
  if (crrData) {
    showModal = (
      <Modal
        pokemon={crrData}
        onClose={() => setCrrData(null)}
        onChangePokemon={(pokemon) => setCrrData(pokemon)}
        onSave={() => handleSave(crrData)}
      />
    );
  }

  return (
    <div className="app">
      <div className="filters">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Tìm kiếm Pokemon..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="card_wrapper">
        {filteredPokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            img={pokemon.image}
            onClick={() => setCrrData(pokemon)}
          />
        ))}
        {showModal}
      </div>
    </div>
  );
};

export default App;



