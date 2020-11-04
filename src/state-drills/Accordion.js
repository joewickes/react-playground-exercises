import React from 'react';

class Accordion extends React.Component {
  static defaultProps = {
    sections: [],
  }
  
  state = {
    activeIndex: null,
  }

  handleClick = (currentIndex) => {
    if (this.state.activeIndex === currentIndex) {
      this.setState({
        activeIndex: null,
      });
    } else {
      this.setState({
        activeIndex: currentIndex,
      });
    }
  }

  renderLi = (section, curIn) => {
    return (
      <li id={curIn}>
        <button onClick={() => this.handleClick(curIn)}>{section.title}</button>
        {(curIn === this.state.activeIndex) && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    const {sections} = this.props;

    return (
      <ul>
        {sections.map((section, index) => {
          return this.renderLi(section, index);
        })}
      </ul>
    );
  }
}

export default Accordion;