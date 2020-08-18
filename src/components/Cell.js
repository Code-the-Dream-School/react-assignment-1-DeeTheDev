import React, { Component } from "react";
//   this is the component that represent a square of the board

class Cell extends Component {
    render() {
        return (
            <button
                className="square btn btn-outline-primary"
                onClick={this.props.onClick}
            >
                {this.props.icon}
            </button>
        );
    }
}
export default Cell;
