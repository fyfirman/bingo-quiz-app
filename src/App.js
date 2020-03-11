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
  };

  editScore = (team, score) => {
    for (var i in this.data) {
      if (this.data[i].team === team) {
        this.data[i].score = score;
        break;
      }
    }
    this.setState({
      data: this.data
    });
  };

  render() {
    return (
      <div>
        <Layout>
          <Layout>
            <Sider>
              <Leaderboard data={this.data} editScore={this.editScore} />
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
