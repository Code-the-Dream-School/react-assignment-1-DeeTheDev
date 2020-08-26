import React, { Component } from "react";
import Header from "./Header";
import Info from "./Info";
import Board from "./Board";
//    main component which is rendered in the DOM

class Game extends Component {
    state = {
        isPlaying: false,
        playerO: "",
        playerX: "",
        reset: false,
        start: false,
        turn: 0,
    };
    handleChangeStart = () => {
        this.setState({
            start: true,
        });
    };
    handleStartGame = () => {
        this.setState({
            turn: 1,
            isPlaying: true,
        });
    };
    handleAddPlayers = (players) => {
        //set players names through the players variable passed by info comp addPlayers function
        this.setState({
            playerO: players.playerO,
            playerX: players.playerX,
        });
    };
    handleChangeTurn = () => {
        this.setState({
            turn: this.state.turn === 1 ? 2 : 1,
        });
    };
    handleNewGame = () => {
        this.setState({
            start: false,
            isPlaying: false,
            playerX: "",
            playerO: "",
            turn: 0,
        });
    };
    render() {
        return (
            <>
                <Header
                    start={this.state.start}
                    changeStart={this.handleChangeStart}
                />
                <Info
                    start={this.state.start}
                    turn={this.state.turn}
                    startGame={this.handleStartGame}
                    addPlayers={this.handleAddPlayers}
                />
                <Board
                    newGame={this.handleNewGame}
                    changeTurn={this.handleChangeTurn}
                    isPlaying={this.state.isPlaying}
                    playerX={this.state.playerX}
                    playerO={this.state.playerO}
                    turn={this.state.turn}
                />
            </>
        );
    }
}

export default Game;
