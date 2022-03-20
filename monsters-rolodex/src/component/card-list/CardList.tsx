import React from "react";
import { Monster } from "../../interface";

interface Props {
  monsters: Monster[];
}

class CardList extends React.Component<Props, {}> {
  render() {
    const monsters = this.props.monsters;

    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
