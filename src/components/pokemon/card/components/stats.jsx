import React from "react";
import "./stats.scss";

const statIcons = {
  hp: "fas fa-heart",
  attack: "fas fa-fire",
  defense: "fas fa-shield-alt",
  speed: "fas fa-running",
};

const profileIcons = {
  weight: "fas  fa-weight-hanging",
  height: "fas fa-expand-alt",
  egg: "fas fa-egg",
  gender: "fas fa-quote-right",
};

export const PokemonStat = ({ stat, value }) => {
  return (
    <div title={stat} className="pokemon-card__stats__item chip">
      <i className={`pokemon-card__stats__icon ${statIcons[stat]}`} />
      <div className="pokemon-card__stats__value">{value}</div>
    </div>
  );
};
export const PokemonaProfile = ({ stat, value }) => {
  return (
    <div title={stat} className="pokemon-card__stats__item">
      <i className={`pokemon-card__stats__item__icon ${profileIcons[stat]}`} />
      <div className="pokemon-card__stats__item__value">{value}</div>
    </div>
  );
};
