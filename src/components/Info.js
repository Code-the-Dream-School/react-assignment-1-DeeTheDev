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
            player1: player1Input.current.value,
            player2: player2Input.current.value,
        };
        props.addPlayers(players);
        e.currentTarget.reset();
        // this.props.addPlayers(this.player1Input.current.value);
    };

    return (
        <div className="center">
            <form className="center" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col">
                        <label>
                            Name
                            <img src={X} className="icon" alt="X icon" />
                        </label>
                        <input
                            type="text"
                            ref={player1Input}
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <label>
                            Name
                            <img src={Y} className="icon" alt="Y icon" />
                        </label>
                        <input
                            type="text"
                            ref={player2Input}
                            className="form-control"
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Add Players"
                />
            </form>
        </div>
    );
};

export default Info;
