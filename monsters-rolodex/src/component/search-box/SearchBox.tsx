import React from "react";

interface Props {
  className: string;
  placeholder: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

class SearchBox extends React.Component<Props, {}> {
  render(): React.ReactNode {
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
