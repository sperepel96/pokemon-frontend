import { useEffect, useState } from "react";
import { PokemonApi } from "../../Api/pokemon.js";
import Pokemon from "../pokemon/card/";
import "./historyItem.scss";
import FightResultTable from "../fightResultTable";
import moment from "moment/moment.js";

const HistoryItem = ({ item }) => {
  const [playerPokemon, setPlayerPokemon] = useState(undefined);
  const [enemyPokemon, setenemyPokemon] = useState(undefined);
  const [winner, sesWinenr] = useState(undefined);
  const getPokemons = async () => {
    try {
      const player = await PokemonApi.getPokemonById(item?.pokemon?.player);
      const enemy = await PokemonApi.getPokemonById(item?.pokemon?.server);
      setPlayerPokemon(player?.pokemon);
      setenemyPokemon(enemy?.pokemon);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (item?.isFinished && item?.winner) {
      sesWinenr(item.winner.toLowerCase());
    }

    if (
      item?.pokemon?.player !== undefined &&
      item?.pokemon?.server !== undefined
    ) {
      setPlayerPokemon(item?.pokemon.player);
      setenemyPokemon(item?.pokemon.server);
    } else {
      try {
        getPokemons();
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  return (
    <div className={"historyItem"}>
      <div className={"historyItem__header"}>
        <div className={"historyItem__header__name"}>
          {item.player} vs {item.server}
        </div>
        {item?.isFinished && (
          <div className={"historyItem__header__win"}>
            Winner: {item.winner}
          </div>
        )}
        <div className={"historyItem__header__date"}>
          {moment(item.createdAt).format("D/MM/YY, HH:mm:ss")}
        </div>
      </div>
      <div className={"historyItem__details"}>
        <div className={"historyItem__details__pokemons"}>
          {playerPokemon && (
            <Pokemon pokemon={playerPokemon} isWinner={winner === "player"} />
          )}
          {enemyPokemon && (
            <Pokemon pokemon={enemyPokemon} isWinner={winner === "server"} />
          )}
        </div>
        <div className={"historyItem__details__result"}>
          <FightResultTable data={item?.attacks} />
        </div>
      </div>
    </div>
  );
};
export default HistoryItem;
