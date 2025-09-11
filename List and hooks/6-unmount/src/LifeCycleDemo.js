import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("✅ Component updated. Count is now:", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("❌ Component is being unmounted.");
  }

  render() {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Lifecycle Demo</h2>
        <p className="mb-4 text-lg">Count: {this.state.count}</p>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;
