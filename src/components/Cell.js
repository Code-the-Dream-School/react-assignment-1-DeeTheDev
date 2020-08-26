import React, { Component } from "react";
import X from "../images/1.png";
import Y from "../images/0.png";
//   this is the component that represent a square of the board

class Cell extends Component {
    XIcon = (<img src={X} className="squareIcon" alt="TicTacToe Logo" />);
    YIcon = (<img src={Y} className="squareIcon" alt="TicTacToe Logo" />);
    render() {
        // create variable to store Icon X or O inside cell based on props value
        let icon = () => {
            if (this.props.value === 1) {
                return this.XIcon;
            } else if (this.props.value === 2) {
                return this.YIcon;
            }
            return null;
        };
        return (
            <button
                className="square btn btn-outline-primary"
                onClick={this.props.changeTurn}
            >
                {icon()}
            </button>
        );
    }
}
export default Cell;
