import React from "react";

const BASE = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0
};

class Header extends React.Component {
  updatePosition = top => {
    if (this.node) {
      if (this.last !== top) {
        this.node.style.top = `${top}px`;
        this.last = top;
      }
    }
  };

  saveNode = node => {
    this.node = node;
  };

  render() {
    const { type } = this.props;

    return (
      <div ref={this.saveNode} style={BASE} className={`header header_${type}`}>
        Header
      </div>
    );
  }
}

export default Header;
