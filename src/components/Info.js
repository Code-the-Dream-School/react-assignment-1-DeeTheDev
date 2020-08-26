import React from "react";
import X from "../images/1.png";
import Y from "../images/0.png";
//  this component is the one you will use to create the inputs for the players's name

const Info = (props) => {
    const player1Input = React.createRef();
    const player2Input = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const players = {
            playerX: player1Input.current.value,
            playerO: player2Input.current.value,
        };
        props.startGame();
        props.addPlayers(players);
        e.currentTarget.reset();
        // this.props.addPlayers(this.player1Input.current.value);
    };
    //store props inside variables for cleaner code
    const start = props.start;
    const turn = props.turn;
    //return Logic with conditional statements
    if (start && turn === 0) {
        return (
            <div className="center">
                <form className="center" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-grou col-md-6">
                            <label>
                                Name
                                <img src={X} className="icon" alt="X icon" />
                            </label>
                            <input
                                type="text"
                                ref={player1Input}
                                className="form-control"
                                maxLength="15"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>
                                Name
                                <img
                                    src={Y}
                                    className="icon ml-1"
                                    alt="Y icon"
                                />
                            </label>
                            <input
                                type="text"
                                ref={player2Input}
                                className="form-control"
                                maxLength="15"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add Players
                    </button>
                </form>
            </div>
        );
    }
    // if start is true, return nothing
    return null;
};

export default Info;
