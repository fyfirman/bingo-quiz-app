import React from 'react';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

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
