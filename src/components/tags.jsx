import React, { Component } from "react";

class tag extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }

  renderTags() {
    const tags = this.state.tags;
    if (tags.length === 0) return null;
    // use .map to loop th<ul>{this.renderTags()}</ul>rough an array
    // we add a key to each li to make them distinguishable (React needs)
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  }
}

export default tag;
