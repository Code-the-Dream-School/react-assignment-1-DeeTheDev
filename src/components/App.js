import React, { Component } from "react";
import Header from "./Header";
import Info from "./Info";
import Board from "./Board";
//    main component which is rendered in the DOM

class Game extends Component {
    handleAddPlayers = (players) => {
        //needs work------------------------------------------
        console.log(players);
    };
    render() {
        return (
            <>
                <Header />
                <Info addPlayers={this.handleAddPlayers} />
                <Board p1name={this.props.p1} />
            </>
        );
    }
}

export default Game;
