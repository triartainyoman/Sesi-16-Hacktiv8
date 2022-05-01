import React, { Component } from "react";
import { connect } from "react-redux";

class ClassCounter extends Component {
  increment() {
    this.props.dispatch({
      type: "INCREMENT",
    });
  }

  decrement() {
    this.props.dispatch({
      type: "DECREMENT",
    });
  }

  customIncrement() {
    this.props.dispatch({
      type: "INCREMENT",
      payload: 10,
    });
  }

  render() {
    return (
      <div>
        <h1>Class Component Counter</h1>
        <h1 id="counter">{this.props.localCounter}</h1>
        <button id="decrement" onClick={() => this.decrement()}>
          -
        </button>
        <button id="increment" onClick={() => this.increment()}>
          +
        </button>
        <button id="customIncrement" onClick={() => this.customIncrement()}>
          +10
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    localCounter: state.counter,
  };
};

export default connect(mapStateToProps)(ClassCounter);
