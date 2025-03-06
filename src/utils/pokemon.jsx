const pokemonTypes = {
  Normal: { icon: "fas fa-circle", color: "#A8A878" },
  Fighting: { icon: "fas fa-fist-raised", color: "#C03028" },
  Flying: { icon: "fas fa-feather-alt", color: "#A890F0" },
  Poison: { icon: "fas fa-skull-crossbones", color: "#A040A0" },
  Ground: { icon: "fas fa-mountain", color: "#E0C068" },
  Rock: { icon: "fas fa-gem", color: "#B8A038" },
  Bug: { icon: "fas fa-bug", color: "#A8B820" },
  Ghost: { icon: "fas fa-ghost", color: "#705898" },
  Steel: { icon: "fas fa-tools", color: "#B8B8D0" },
  Fire: { icon: "fas fa-fire", color: "#F08030" },
  Water: { icon: "fas fa-water", color: "#6890F0" },
  Grass: { icon: "fas fa-leaf", color: "#78C850" },
  Electric: { icon: "fas fa-bolt", color: "#F8D030" },
  Psychic: { icon: "fas fa-brain", color: "#F85888" },
  Ice: { icon: "fas fa-snowflake", color: "#98D8D8" },
  Dragon: { icon: "fas fa-dragon", color: "#7038F8" },
  Dark: { icon: "fas fa-moon", color: "#705848" },
  Fairy: { icon: "fas fa-magic", color: "#EE99AC" },
};
export const getPokemonType = (type) => {
  return (
    pokemonTypes[type] || {
      icon: "fas fa-question-circle",
      color: "#68A090",
    }
  );
};
