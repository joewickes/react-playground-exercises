import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const count = this.state.count;

    return (
      <div>
        <p>{count >= 8 ? 'BOOM!!!!' : count % 2 === 0 ? 'tick' : 'tock'}</p>
      </div>
    );
  }
}

export default Bomb;