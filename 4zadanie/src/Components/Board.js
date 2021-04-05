import React from 'react';
import Brick from "./Brick";

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        const {height, width, ringes} = props;
        const bricks = this.bricksNumberInitialize(height, width);
        this.state = {
            bricksInGame: bricks,
            fieldsToDiscover: (height * width) - ringes,
            gameOver: false,
        };
        this.planRingsOnBoard(bricks, ringes);
    }

    bricksNumberInitialize(height, width) {
        return [...Array(height)].map((_, row) =>
            [...Array(width)].map((_, column) => ({
                row: row,
                col: column,
                isRing: false,
                isDiscovered: false,
                count:false,
                isGameLost: false,
            }))
        );
    }

    planRingsOnBoard(bricksInGame, ringesNumber) {
        let plantedRings = 0;

        while (plantedRings < ringesNumber) {
            let randomRow = bricksInGame[Math.floor(Math.random() * bricksInGame.length)];
            let randomBrick = randomRow[Math.floor(Math.random() * randomRow.length)];
            if (!randomBrick.isRing) {
                randomBrick.isRing = true;
                plantedRings++;
            }
        }
    }    

    selectedRing(brick) {
        let newBoardState = this.state.bricksInGame.map(rows =>
            rows.map(brick => ({
                ...brick,
                isDiscovered: true,
                isGameLost: true
            })));
        
        this.setState({bricksInGame: newBoardState});
    }

    discoverBricks(brick) {
        brick.isDiscovered = true;
        brick.count = true;

        this.setState({brick});
    }

    onClickHandle(brick) {
        if (this.isGameFinished() || brick.isDiscovered) return;

        if (brick.isRing) {
            this.discoverBricks(brick);
            this.selectedRing(brick);
        } else {
            this.discoverBricks(brick);
        }
    }


    isGameWon = () => [].concat(...this.state.bricksInGame)
        .some(brick => brick.isRing === true && brick.isDiscovered === true);

    isGameLost = () => this.countDiscoveredFields() === this.state.fieldsToDiscover;

    isGameFinished = () => this.isGameLost() || this.isGameWon();

    countDiscoveredFields = () => [].concat(...this.state.bricksInGame).filter(brick => brick.isDiscovered).length;

    countFields = () => [].concat(...this.state.bricksInGame).filter(brick => brick.count).length;

    gameStatus = () => this.isGameLost() ? "You lose..." : this.isGameWon() ? "You win!" : "Game in progress";

    renderBricks(bricks) {
        return bricks.map(rows =>
            rows.map(brick =>
                <div key={`r${brick.row}c${brick.col}`}>
                    <Brick
                        row={brick.row}
                        col={brick.col}
                        isRing={brick.isRing}
                        isDiscovered={brick.isDiscovered}
                        isGameLost={brick.isGameLost}
                        onClick={() => {
                            this.onClickHandle(brick)
                        }}
                    />
                    {brick.col === this.props.width - 1 ? 
                    <div className="end-row"/> : ""}
                </div>
            )
        )
    };

    render() {
        return <div>
            <div>
                <div>
                    <label>{this.gameStatus()}</label>
                </div>
                <div>
                    <label>Tries:{this.countFields()}</label>
                </div>
            </div>
            <div className="game-board">
                <div>
                    {this.renderBricks(this.state.bricksInGame)}
                </div>
            </div>
        </div>
    }
}