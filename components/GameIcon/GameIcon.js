import React from "react";
import { UiContext } from "../../contexts/ui";
import { useContext } from "react";
import { usePrototypeData } from "../../contexts/prototype";
import Tooltip from "../Tooltip/Tooltip";

export default function GameIcon(props) {
  const prototype = usePrototypeData();
  const iconSize = props.size || "text-xl";
  const game = props.game || "valorant";

  return (
    <div className="cursor-pointer p-1 border border-ui-700 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
      <span
        className={`icon ${iconSize} ${
          prototype.getGameByID(game).slug ===
          "apexlegends"
            ? "icon-game-apexlegends-symbol text-game-apexlegends"
            : ""
        } ${
          prototype.getGameByID(game).slug ===
          "csgo"
            ? "icon-game-csgo-symbol text-game-csgo"
            : ""
        }  ${
          prototype.getGameByID(game).slug ===
          "dota2"
            ? "icon-game-dota2-symbol text-game-dota2"
            : ""
        }  ${
          prototype.getGameByID(game).slug ===
          "leagueoflegends"
            ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
            : ""
        }  ${
          prototype.getGameByID(game).slug ===
          "rocketleague"
            ? "icon-game-rocketleague-symbol text-game-rocketleague"
            : ""
        } ${
          prototype.getGameByID(game).slug ===
          "pubg"
            ? "icon-game-pubg-symbol text-game-pubg"
            : ""
        }  ${
          prototype.getGameByID(game).slug ===
          "valorant"
            ? "icon-game-valorant-symbol text-game-valorant"
            : ""
        }`}
      />
    </div>
  );
}
