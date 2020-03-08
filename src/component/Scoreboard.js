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
      score: 500
    },
    {
      team: 'blue',
      score: 0
    },
    {
      team: 'yellow',
      score: 20
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
      <div>
        <ul>
          {this.state.data.map((data) =>
            <li>
              <Button onClick={() => this.decreaseScore(data.team)}>-5</Button>
              {data.team},{data.score}
              <Button onClick={() => this.increaseScore(data.team)}>+5</Button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
