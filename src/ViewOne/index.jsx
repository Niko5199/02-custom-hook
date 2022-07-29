import React, { useEffect, useState } from "react";

export const ViewOne = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://pokemon.api.co/api/v2/pokemon");
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.log(error);
        setPokemons([]);
        setError(new Error("Error en pokemon api"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, []);
};
