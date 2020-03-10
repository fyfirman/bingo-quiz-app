import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Layout } from 'antd';
import Board from './component/Board';
import Scoreboard from './component/Scoreboard';
import Leaderboard from './component/Leaderboard';

const { Header, Footer, Sider, Content } = Layout;

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
        <Layout>
          <Header>BOREYES 2020</Header>
          <Layout>
            <Sider>
              <Scoreboard />
              <Leaderboard
                data={this.data}
              />
              <Footer>
                Copyrigth 2020.
            </Footer>
            </Sider>
            <Content>
              <Board
                increaseScore={this.increaseScore} />
            </Content>
          </Layout>
        </Layout>


      </div >
    );
  }
}
