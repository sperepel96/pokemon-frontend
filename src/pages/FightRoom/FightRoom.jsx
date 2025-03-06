import "./FightRoom.scss";
import { useEffect, useState } from "react";
import { socket } from "../../config/socket.js";
import { useParams } from "react-router-dom";
import { PokemonApi } from "../../Api/pokemon.js";
import Pokemon from "../../components/pokemon/card";
import FightResultTable from "../../components/fightResultTable/index.js";
import M from "materialize-css";

const FightRoom = () => {
  const { id } = useParams();

  const [pokemon, setPokemons] = useState();
  const [enemy, setEnemy] = useState();

  const [loading, setLoading] = useState(true);

  const [playerHP, setPlayerHP] = useState(100);
  const [serverHP, setServerHP] = useState(100);
  const [fightId, setfightId] = useState(null);

  const [result, setResult] = useState(undefined);
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    if (loading) {
      return;
    }
    socket.emit("start-fight", { pokemonId: id });
    socket.on("fight-started", (data) => {
      setPokemons(data.pokemon);
      setEnemy(data.enemy);
      setfightId(data.fightId);
      setPlayerHP(data.playerHP);
      setServerHP(data.serverHP);
    });
    socket.on("update-state", ({ playerHP, serverHP, currentTurn, damage }) => {
      setLogs((prevLogs) => [
        ...prevLogs,
        {
          defender: currentTurn,
          damage: damage,
          playerHP: playerHP,
          serverHP: serverHP,
        },
      ]);
      setServerHP(serverHP);
      setPlayerHP(playerHP);
      M.toast({ html: `Damage: ${damage}` });
    });
    //
    socket.on("fight-ended", ({ fightState, result }) => {
      setLogs((prevState) => [
        ...prevState,
        {
          defender: fightState.currentTurn,
          damage: fightState.damage,
          playerHP: fightState.playerHP,
          serverHP: fightState.serverHP,
        },
      ]);
      setResult(result);
      setServerHP(fightState.serverHP);
      setPlayerHP(fightState.playerHP);
    });

    return () => {
      socket.off("fight-started");
      socket.off("update-state");
      socket.off("attack-result");
      socket.off("fight-ended");
    };
  }, [loading]);
  useEffect(() => {
    setLoading(false);
  }, []);
  const handleAttack = () => {
    if (fightId) {
      socket.emit("player-attack", {
        fightId,
      });
    }
  };

  return (
    <div className={"fight-room"}>
      <div className="fight-room__header">
        <div className={"fight-room__header__text"}>
          <div className={"fight-room__header__text__title"}>
            Fight name: {fightId || "Waiting..."}
          </div>
          <div className={"fight-room__header__text__subtitle"}>
            Press Hit to attack opponent!!!
          </div>
        </div>
        <div className={"fight-room__header__actions"}>
          {result ? (
            <div className="fight-room__header__actions__result ">
              Winner: {result.message}
            </div>
          ) : (
            <div className={"fight-room__header__actions__hp"}>
              <div className={"fight-room__header__actions__hp__item"}>
                Player HP: <span className={"chip"}>{playerHP}</span>
              </div>
              <div className={"fight-room__header__actions__hp__item"}>
                Server HP:<span className={"chip"}> {serverHP}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={"fight-room__pokemons"}>
        {pokemon && (
          <div className={`fight-room__pokemons__item `}>
            <Pokemon pokemon={pokemon} isWinner={result?.winner === "player"} />
            <progress
              key={playerHP}
              className={"progress-hp"}
              value={playerHP}
              max={pokemon?.base?.hp}
            />
          </div>
        )}
        <div className="fight-room__action">
          <button
            onClick={handleAttack}
            disabled={playerHP === 0 || serverHP === 0 || result}
            className="fight-room__attack-btn"
          >
            <i className={"fas fa-meteor"} /> Hit!!!
          </button>
        </div>

        {enemy && (
          <div className={`fight-room__pokemons__item `}>
            <Pokemon pokemon={enemy} isWinner={result?.winner === "server"} />
            <progress
              key={serverHP}
              value={serverHP}
              className="progress-hp mirrored"
              max={enemy?.base?.hp}
            />
          </div>
        )}
      </div>
      <div className="fight-room__logs">
        <FightResultTable data={logs} key={logs.length} />
      </div>
    </div>
  );
};

export default FightRoom;
