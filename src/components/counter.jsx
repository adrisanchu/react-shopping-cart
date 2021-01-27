import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  /*
	this is the classic way (a bit odd)
  constructor() {
    super(); // allows access to Counter object (the base constructor)
    this.handleIncrement = this.handleIncrement.bind(this);
	}
	we will be using arrow expressions instead,
	so then handleIncrement INHERITS the 'this' of the parent !
	*/

  handleIncrement = () => {
    // overwriting the value of state.count with setState
    this.setState({ count: this.state.count + 1 });
    // console.log("increment clicked", this.state.count);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  renderTags() {
    const tags = this.state.tags;
    if (tags.length === 0) return null;
    // use .map to loop through an array
    // we add a key to each li to make them distinguishable (React needs)
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  }
}

export default Counter;
