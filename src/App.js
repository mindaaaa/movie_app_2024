import React from 'react';

class App extends React.Component {
  componentDidMount() {
    console.log('componentDidMount console');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate console');
  }

  componentWillUnmount() {
    console.log('Will Unmount');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  render() {
    console.log('render console');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>App</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
