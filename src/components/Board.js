// ---------------- Needs refactoring

import React, { useState } from "react";
import Cell from "./Cell";
import X from "../images/1.png";
import Y from "../images/0.png";

// Main Board
const Board = (props) => {
    //icons stored in variables
    let XIcon = <img src={X} className="icon" alt="TicTacToe Logo" />;
    let YIcon = <img src={Y} className="icon" alt="TicTacToe Logo" />;
    //board filled with null
    let [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    //turn state
    let turn = props.turn;
    //handles click event for each CELL
    const handleCellClick = (index) => {
        //copy version of boardSquares
        let squares = [...boardSquares];
        //check if squares are filled inside board array and return
        if (whoIsWinner(boardSquares) || squares[index]) return;
        //insert X or O icon depending on who is Next
        squares[index] = turn === 1 ? 1 : 2;
        //change turn from app js
        props.changeTurn();
        setBoardSquares(squares);
    };

    //add winning combos and function to check if there is winner
    function whoIsWinner(squares) {
        let winningCombos = [
            //across
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //vertical
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            //diagnol
            [0, 4, 8],
            [2, 4, 6],
        ];
        // look through winningCombo array
        for (let i = 0; i < winningCombos.length; i++) {
            //check if values in squares array match the winning combos
            let [a, b, c] = winningCombos[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[b] === squares[c]
            ) {
                return squares[a];
            }
        }
        //  return winner, else return null
        return null;
    } // end whoIsWinner
    //check players turn and determin and display winner
    let status;
    let winner = whoIsWinner(boardSquares);
    status = winner ? winner : `Player Turn: ${turn === 1 ? "X" : "O"}`;
    let genCell = (index) => {
        return (
            <Cell
                value={boardSquares[index]}
                key={index}
                changeTurn={() => handleCellClick(index)}
            />
        );
    };
    const handleNewGame = () => {
        //newGame function call
        props.newGame();
        //reset board array items to null
        setBoardSquares(Array(9).fill(null));
    };
    //handle Reset game
    const handleResetGame = () => {
        setBoardSquares(Array(9).fill(null));
    };
    //store props inside variables
    const isPlaying = props.isPlaying;
    // RETURN logic with conditional statement
    if (isPlaying) {
        return (
            // react fragment <></>
            <>
                <div className="together">
                    <p>
                        <img src={X} className="icon" alt="TicTacToe Logo" />
                        {props.playerX}
                    </p>
                    <p>
                        <img src={Y} className="icon" alt="TicTacToe Logo" />
                        {props.playerO}
                    </p>
                </div>
                <div className="together">
                    <p>
                        {status === 1 || status === 2 ? "Winner is " : null}
                        {status === 1 ? XIcon : status === 2 ? YIcon : status}
                    </p>
                </div>
                <div className="together"></div>
                <div className="board">
                    <div className="row">
                        {genCell(0)}
                        {genCell(1)}
                        {genCell(2)}
                    </div>
                    <div className="row">
                        {genCell(3)}
                        {genCell(4)}
                        {genCell(5)}
                    </div>
                    <div className="row">
                        {genCell(6)}
                        {genCell(7)}
                        {genCell(8)}
                    </div>
                </div>
                <div className="together">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleNewGame}
                    >
                        New Game
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleResetGame}
                    >
                        Reset
                    </button>
                </div>
            </>
        );
    }
    //else return nothing (do not display board)
    return null;
};

export default Board;
