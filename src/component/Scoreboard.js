import React from 'react';
import { Button } from 'antd';

export default class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: this.data
    };
  }

  data = [
    {
      team: 'red',
      alias: 'Red Team',
      score: 0
    },
    {
      team: 'green',
      alias: 'Green Team',
      score: 0
    },
    {
      team: 'yellow',
      alias: 'Yellow Team',
      score: 0
    },
  ]

  increaseScore = (team) => {
    for (var i in this.data) {
      if (this.data[i].team === team) {
        this.data[i].score += 5;
        break;
      }
    }
    this.setState({
      data: this.data,
    });
  }

  decreaseScore = (team) => {
    for (var i in this.data) {
      if (this.data[i].team === team) {
        this.data[i].score -= 5;
        break;
      }
    }
    this.setState({
      data: this.data,
    });
  }

  render() {
    return (
      <div className="scoreboard sideboard">
        <h1 className="sideboard-title">Scoreboard</h1>
        {this.state.data.map((data) =>
          <div className={data.team + "-scoreboard-item" + " scoreboard-item"}>
            <Button onClick={() => this.decreaseScore(data.team)}>-</Button>
            <span className="text-item">
              <span className="team-name">{data.alias}</span>
              <span>{data.score}</span>
            </span>
            <Button onClick={() => this.increaseScore(data.team)}>+</Button>
          </div>
        )}
      </div>
    );
  }
}
