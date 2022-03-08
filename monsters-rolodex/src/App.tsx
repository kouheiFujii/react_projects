import React from "react";
import { Monsters } from "./interface";
import "./App.css";
import { Monster } from "./interface/monsters";

interface Props {}
class App extends React.Component<{}, Monsters> {
  constructor(props: Props) {
    super(props);
    console.log("constructor");

    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((users: Monster[]) =>
        this.setState(
          (): Monsters => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const searchString = e.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) =>
              monster.name.toLocaleLowerCase().includes(searchString)
            );
            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
