import React from "react";
import ReactDOM from "react-dom";
import S from "./Button.module.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      list: this.state.list + 1,
    });
  }

  render() {
    const { loading, error } = this.state;
    return (
      <button class={S.button} onClick={this.loadMore}> 
      </button>
    );
  }
}

export default Button;