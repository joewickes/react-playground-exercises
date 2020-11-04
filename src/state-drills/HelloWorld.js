import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: null,
  }

  handleButtonClick = (e) => {
    const eClass = e.target.className;
    
    this.setState({
      who: eClass,
    });
  }

  render() {
    const {who} = this.state;

    return (
      <div>
        <h1>Hello {who}!</h1>
        <button className="world" onClick={this.handleButtonClick}>World</button>
        <button className="friend" onClick={this.handleButtonClick}>Friend</button>
        <button className="React" onClick={this.handleButtonClick}>React</button>
      </div>
    );
  }
}

export default HelloWorld;