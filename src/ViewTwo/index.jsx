import React, { useState } from "react";
import styled from "styled-components";
import useFetchPokemons from "../hooks/useFetchPokemons";

const ViewTwo = () => {
  const { pokemons, error, isLoading, fetchPokemons } = useFetchPokemons();

  return (
    <div>
      <h1>View Two</h1>
      {isLoading && <p>Cargando...</p>}
      <StyledContainerPokemons>
        {!isLoading &&
          pokemons.map((pokemon) => (
            <StyledBoxPokemon key={pokemon.name}>
              <p>{pokemon.name}</p>
            </StyledBoxPokemon>
          ))}
      </StyledContainerPokemons>
      {error && <p>Something is wrong!</p>}
      <button onClick={fetchPokemons}>Solicitar pokemons</button>
    </div>
  );
};

export default ViewTwo;

const StyledContainerPokemons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6;
`;

const StyledBoxPokemon = styled.div`
  background-color: #267c8d;
  border: 2px solid #ccc;
  border-radius: 10px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  width: 100px;
  margin: 40px;

  box-shadow: 18px 18px 16px -4px rgba(0, 0, 0, 0.43);
  -webkit-box-shadow: 18px 18px 16px -4px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 18px 18px 16px -4px rgba(0, 0, 0, 0.43);
`;
