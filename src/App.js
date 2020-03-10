import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import Board from './component/Board';
import Scoreboard from './component/Scoreboard';
import Leaderboard from './component/Leaderboard';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Board />
        <Scoreboard />
        <Leaderboard />
      </div>
    );
  }
}
