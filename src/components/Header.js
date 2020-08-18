import React from "react";
import logo from "../images/logo.png";
//  this is the component that displays the logo and start button at the beginning

const Header = (props) => {
    return (
        <div className="center">
            <img src={logo} className="logo" alt="TicTacToe Logo" />
            <h1>TIC TAC TOE</h1>
            <button className="btn btn-primary">Start</button>
        </div>
    );
};

export default Header;

//cell
// value (prop)
//on click function (prop)

//board
// state
//boardState
// turnState
//handleClick
//copoy of our board state
// if index of the board is filled, return
// mutate that copy and add X or O
//calculate nextTurn
// set state of the board (updated)
//set state of the turn

//function that calculates winner
