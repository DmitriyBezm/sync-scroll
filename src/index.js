import React from "react";
import ReactDOM from "react-dom";
import ScrollView from "./ScrollView";
import "./styles.css";

class App extends React.Component {
  scrolls = [];
  updating = false;

  registerScroll = ({ node, inst }) => {
    this.scrolls.push({ node, inst });
    node.addEventListener("scroll", this.handlePaneScroll.bind(this, node));
  };

  handlePaneScroll = node => {
    if (this.updating) return false;

    this.scrollTop = node.scrollTop;
    window.requestAnimationFrame(this.updateScolls);
  };

  unregisterScroll = node => {
    node.removeEventListener("scroll", this.handlePaneScroll.bind(this, node));
    this.scrolls.filter(({ node: savedNode }) => savedNode !== node);
  };

  updateScolls = () => {
    this.updating = true;

    this.scrolls.forEach(({ inst }) => {
      inst.updateScroll(this.scrollTop);
    });

    this.updating = false;
  };

  render() {
    return (
      <div className="App">
        <ScrollView
          registerScroll={this.registerScroll}
          unregisterScroll={this.unregisterScroll}
          onScroll={this.handleScroll}
          id="0"
        />
        <ScrollView
          registerScroll={this.registerScroll}
          unregisterScroll={this.unregisterScroll}
          onScroll={this.handleScroll}
          type="second"
          id="1"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
