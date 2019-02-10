import React from "react";
import Header from "./Header";

class ScrollView extends React.Component {
  componentDidMount() {
    const { registerScroll } = this.props;
    if (registerScroll) {
      registerScroll({ node: this.node, inst: this });
    }
  }

  componentWillUnmount() {
    const { unregisterScroll } = this.props;
    if (unregisterScroll) {
      unregisterScroll(this.node);
    }
  }

  saveScroll = node => {
    this.node = node;
  };

  saveHeader = header => {
    this.header = header;
  };

  updateScroll = top => {
    this.node.scrollTop = top;
    this.header.updatePosition(this.node.scrollTop);
  };

  render() {
    const { type } = this.props;

    return (
      <div ref={this.saveScroll} className="scroll-wrap">
        <Header type={type} ref={this.saveHeader} id={this.props.id} />
        <div className={`scroll scroll_${type}`} />
      </div>
    );
  }
}

export default ScrollView;
