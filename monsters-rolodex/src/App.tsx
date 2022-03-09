import React from "react";
import { Monster } from "./interface";
import "./App.css";

interface Props {}
interface State {
  monsters: Monster[];
  searchField?: string;
}
class App extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    console.log("constructor");

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((users: Monster[]) =>
        this.setState(
          (): State => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  render(): React.ReactNode {
    console.log("render");
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchField!)
    );
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const searchField = e.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
