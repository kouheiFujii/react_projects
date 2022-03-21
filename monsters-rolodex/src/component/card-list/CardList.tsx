import React from "react";
import { Monster } from "../../interface";
import "./card-list.styles.css";
import "./card.styles.css";

interface Props {
  monsters: Monster[];
}

class CardList extends React.Component<Props, {}> {
  render() {
    const monsters = this.props.monsters;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
