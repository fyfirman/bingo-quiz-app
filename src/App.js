import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import Board from './component/Board';
import Scoreboard from './component/Scoreboard';
import Leaderboard from './component/Leaderboard';

export default class App extends React.Component {

  data = [
    {
      team: 'red',
      score: 0
    },
    {
      team: 'blue',
      score: 0
    },
    {
      team: 'yellow',
      score: 0
    },
  ]

  increaseScore = (team, score) => {
    for (var i in this.data) {
      if (this.data[i].team === team) {
        this.data[i].score += score;
        break;
      }
    }
    this.setState({
      data: this.data
    });
  }

  render() {
    return (
      <div>
        <Board
          increaseScore={this.increaseScore} />
        <Scoreboard />
        <Leaderboard
          data={this.data}
        />
      </div>
    );
  }
}
