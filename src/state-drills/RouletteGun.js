import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8,
  }
  
  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  componentWillUnmount() {
    return () => clearTimeout(this.timer);
  }

  clickEventHandler = () => {
    this.setState({
      spinningTheChamber: true,
    });

    this.timer = setTimeout(() => {
      let chamber = Math.ceil(Math.random() * 8);

      this.setState({
        spinningTheChamber: false,
        chamber: chamber
      });

    }, 2000);
  }

  render() {
    const {bulletInChamber} = this.props;
    const chamber = this.state.chamber;
    const spinning = this.state.spinningTheChamber;

    let p = null;

    if (spinning) {
      p = 'spinning the chamber and pulling the trigger! ....';
    } else if (bulletInChamber === chamber) {
      p = 'BANG!!!!';
    } else if (bulletInChamber !== chamber && !spinning) {
      p = 'you\'re safe!';
    }

    return (
      <div>
        <p>{p}</p>
        <button onClick={this.clickEventHandler}>Pull the Trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;