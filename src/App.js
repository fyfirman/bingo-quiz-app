import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Board from "./component/Board";
import Scoreboard from "./component/Scoreboard";
import Leaderboard from "./component/Leaderboard";

const { Sider, Content } = Layout;

export default class App extends React.Component {
  data = [
    {
      team: "red",
      alias: "Red Team",
      score: 0
    },
    {
      team: "green",
      alias: "Green Team",
      score: 0
    },
    {
      team: "yellow",
      alias: "Yellow Team",
      score: 0
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem('data')) || this.data
    }
  }

  increaseScore = (team, score) => {
    for (var i in this.state.data) {
      if (this.state.data[i].team === team) {
        this.state.data[i].score += score;
        break;
      }
    }
    this.setState({
      data: this.state.data
    }, () => {
      localStorage.setItem('data', JSON.stringify(this.state.data))
    });
  };

  editScore = (team, score) => {
    for (var i in this.state.data) {
      if (this.state.data[i].team === team) {
        this.state.data[i].score = score;
        break;
      }
    }
    this.setState({
      data: this.state.data
    }, () => {
      localStorage.setItem('data', JSON.stringify(this.state.data))
    });
  };

  render() {
    return (
      <div>
        <Layout>
          <Layout>
            <Sider>
              <Leaderboard data={this.state.data} editScore={this.editScore} />
              <Scoreboard />
            </Sider>
            <Content>
              <Board increaseScore={this.increaseScore} />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
