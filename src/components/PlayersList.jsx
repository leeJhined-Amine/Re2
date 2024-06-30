import players from "../../players";
import Player from "./Player";

function PlayersList() {
  return (
    <div style={{ display: "flex" }}>
      {players.map((player, index) => {
        return (
          <div key={index}>
            <Player
              name={player.name}
              age={player.age}
              team={player.team}
              image={player.image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PlayersList;
