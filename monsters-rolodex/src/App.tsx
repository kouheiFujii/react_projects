import React from "react";
import { Monsters } from "./interface";
import "./App.css";

interface Props {}
class App extends React.Component<{}, Monsters> {
  constructor(props: Props) {
    super(props);
    this.state = {
      monsters: [
        {
          id: 1,
          name: "Linda",
        },
        {
          id: 2,
          name: "Flank",
        },
        {
          id: 3,
          name: "Jacky",
        },
        {
          id: 4,
          name: "Andrei",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
