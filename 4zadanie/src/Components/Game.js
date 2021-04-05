import React from 'react';
import Board from "./Board";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 6,
            width: 6,
            ringes: 1,
            gamePlayedCount: 0,
            isGameLose: 0,
            isGameWon: 0
        }
    }

   

    newGame() {
        this.setState({
            gamePlayedCount: this.state.gamePlayedCount + 1
        });
    }

    render() {
        const {height, width, ringes} = this.state;
        return <div className="game">
            <div className="menu">
                <button className="menu-button" onClick={() => this.newGame()}>
                    Reset
                </button>
                <br />
            </div>
            <div className="board">
                <Board
                    key={this.state.gamePlayedCount}
                    height={height}
                    width={width}
                    ringes={ringes}
                />
            </div>

        </div>
    }
}
export default Game;