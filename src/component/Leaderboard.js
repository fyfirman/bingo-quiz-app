import React from 'react';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
      // data: this.data
    };
  }

  // data = [
  //   {
  //     team: 'red',
  //     score: 0
  //   },
  //   {
  //     team: 'blue',
  //     score: 0
  //   },
  //   {
  //     team: 'yellow',
  //     score: 0
  //   },
  // ]

  render() {
    return (
      <div>
        <ul>
          {this.props.data.map((data) =>
            <li>
              {data.team},{data.score}
            </li>
          )}
        </ul>
      </div>
    );
  }
}
