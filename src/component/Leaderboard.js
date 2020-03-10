import React from 'react';
import { Progress } from 'antd';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <div className="leaderboard sideboard">
        <h1 className="sideboard-title">Leaderboard</h1>
        {this.props.data.map((data) =>
          <span>
            <span>{data.alias}</span>
            <span className='score'>{data.score}</span>
            <Progress className={data.team + "-progress"} percent={Math.round(data.score / 20)} showInfo={false} />
          </span>
        )}
      </div>
    );
  }
}
