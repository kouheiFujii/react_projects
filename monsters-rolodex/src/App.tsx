import React from "react";
import { Monster } from "./interface";
import "./App.css";
import CardList from "./component/card-list/CardList";
import SearchBox from "./component/search-box/SearchBox";

interface Props {}
interface State {
  monsters: Monster[];
  searchField?: string;
}
class App extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((users: Monster[]) =>
        this.setState(
          (): State => {
            return { monsters: users };
          },
          () => {}
        )
      );
  }

  onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render(): React.ReactNode {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField!)
    );
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-box"
          placeholder="search monster"
          onChangeHandler={onSearchChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
