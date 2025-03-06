import React, { useEffect, useState } from "react";
import "./pokemon.scss";
import { getPokemonType } from "../../../utils/pokemon.jsx";
import { PokemonaProfile, PokemonStat } from "./components/stats.jsx";

const Pokemon = ({ pokemon, setSelectedPokemon, isWinner }) => {
  const pokemonType = getPokemonType(pokemon.type[0]);
  return (
    <div
      className={`pokemon-card ${isWinner ? "isWinner" : ""}`}
      style={{
        backgroundColor: `${pokemonType.color}aa`,
      }}
    >
      <div
        className={"pokemon-card__bg"}
        style={{ backgroundImage: `url(${pokemon.image.hires})` }}
      ></div>

      <div className="pokemon-card__header">
        <div className="pokemon-card__header__info">
          <div className={"pokemon-card__header__info__title"}>
            <div className="pokemon-card__header__info__title__species">
              {pokemon.species}
            </div>
            <div className="pokemon-card__header__info__title__name">
              {pokemon.name}
            </div>
          </div>
          <div className="pokemon-card__header__types">
            {pokemon.type.map((type, index) => {
              const type_ = getPokemonType(type);
              return (
                <i
                  title={type}
                  style={{ backgroundColor: type_.color }}
                  key={index}
                  className={`pokemon-card__header__types__item ${type_.icon}`}
                ></i>
              );
            })}
            {pokemon.base?.hp} HP
          </div>
        </div>
        <div
          className={"pokemon-card__header__image"}
          style={{ backgroundImage: `url(${pokemon.image.hires})` }}
        ></div>
      </div>
      <div className="pokemon-card__description ">{pokemon.description}</div>
      <div className="pokemon-card__stats">
        {pokemon?.base &&
          Object.keys(pokemon?.base).map((stat, key) => (
            <PokemonStat stat={stat} value={pokemon?.base[stat]} key={key} />
          ))}
      </div>
      <div className="pokemon-card__profile">
        {pokemon.profile &&
          Object.keys(pokemon.profile).map((item, key) => (
            <PokemonaProfile
              stat={item}
              value={pokemon?.profile[item]}
              key={key}
            />
          ))}
      </div>
      {setSelectedPokemon && (
        <div className="pokemon-card__actions">
          <div
            className={
              "pokemon-card__actions__item pokemon-card__actions__item--select"
            }
            onClick={() => {
              setSelectedPokemon(pokemon);
            }}
          >
            Select
          </div>
          {/*<div*/}
          {/*  className={*/}
          {/*    "pokemon-card__actions__item pokemon-card__actions__item--"*/}
          {/*  }*/}
          {/*>*/}
          {/*  Details*/}
          {/*</div>*/}
        </div>
      )}
    </div>
  );
};
export default Pokemon;
