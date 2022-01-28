import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {id, name, hp, sprites} = pokemon
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(!isClicked)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={isClicked ? sprites.back : sprites.front} onClick={handleClick} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
