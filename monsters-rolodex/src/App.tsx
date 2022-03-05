import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface Props {}
// Component ver
class App extends React.Component<
  {},
  { name: { firstName: string; lastName: string } }
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: { firstName: "Alisa", lastName: "Monroe" },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Hi {this.state.name.firstName}・{this.state.name.lastName}
          </p>
          <button
            onClick={() => {
              this.setState({ name: { firstName: "Bob", lastName: "Thomas" } });
            }}
          >
            name change{" "}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
