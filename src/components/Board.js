import React, { useState } from "react";
import Cell from "./Cell";
// import X from "../images/1.png";
// import Y from "../images/0.png";
// here is where you will create the board 3x3
//--------------------------------------------------------------------------------------
//------------------------------------------- Needs work and refactoring later-------
//--------------------------------------------------------------------------------------

// Main Board
const Board = (props) => {
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    //turn state
    const [xIsNext, setXIsNext] = useState(true);
    const handleCellClick = (index) => {
        //copy version of boardSquares
        const squares = [...boardSquares];
        //check if squares are filled inside board array and return
        if (whoIsWinner(boardSquares) || squares[index]) return;
        //insert X or O icon depending on who is Next
        squares[index] = xIsNext ? "X" : "O";

        // ------------------------ NEEDS ATTENTION, does not determine winner due to logo
        // (
        //     <img src={X} className="squareIcon" alt="TicTacToe Logo" />
        // ) : (
        //     <img src={Y} className="squareIcon" alt="TicTacToe Logo" />
        // );

        setBoardSquares(squares);
        setXIsNext(!xIsNext);
    };
    let genCell = (index) => {
        return (
            <Cell
                value={boardSquares[index]}
                onClick={() => handleCellClick(index)}
            />
        );
    };

    //check players turn and determin and display winner
    let status;
    const winner = whoIsWinner(boardSquares);
    status = winner
        ? `Winner is: ${winner}`
        : `Next Player: ${xIsNext ? "X" : "O"}`;

    //add winning combos and function to check if there is winner
    function whoIsWinner(squares) {
        const winningCombos = [
            //across
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //verticle
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

    // RETURN / DISPLAY
    return (
        // react fragment <></>
        <>
            <div className="together">
                <p>{status}</p>
            </div>
            <div className="together">oops</div>
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
        </>
    );
};

export default Board;
