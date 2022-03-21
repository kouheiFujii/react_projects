import React from "react";
import "./search-box.styles.css";

interface Props {
  className: string;
  placeholder: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

class SearchBox extends React.Component<Props, {}> {
  render(): React.ReactNode {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
