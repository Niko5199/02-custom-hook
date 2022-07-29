import React, { useEffect, useState } from "react";
import useFetchPokemons from "../hooks/useFetchPokemons";

export const ViewOne = () => {
  const { pokemons, error, isLoading, useFetchPokemons } = useFetchPokemons();
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>View One</h1>
      {isLoading && <p>Cargando...</p>}
      {!isLoading &&
        pokemons?.map((pokemon) => {
          return (
            <div key={pokemon.name}>
              <p>{pokemon.name}</p>
            </div>
          );
        })}
      {error && <p>Something went wrong</p>}
    </div>
  );
};

export default ViewOne;
