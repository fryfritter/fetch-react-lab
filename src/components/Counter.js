import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.value} {this.state.value > 1 ? " Likes" : "Like"}{" "}
        </div>

        <button onClick={this.decreaseClickHandler}>Like -1</button>
        <button onClick={this.increaseClickHandler}>Like +1</button>
      </div>
    );
  }

  increaseClickHandler = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decreaseClickHandler = () => {
    if (this.state.value > 0) this.setState({ value: this.state.value - 1 });
  };
}

export default Counter;
