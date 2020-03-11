import React from "react";
import { Progress, Modal, InputNumber, Input } from "antd";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false,
      inputTeamVisible: false,
      targetTeam: "",
      score: 0
    };
  }

  inputScoreChange = value => {
    this.setState({
      score: value
    });
  };

  showModal = team => {
    this.setState({
      inputVisible: true,
      targetTeam: team
    });
  };

  showTeamModal = team => {
    this.setState({
      inputTeamVisible: true,
      targetTeam: team
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      inputVisible: false,
      inputTeamVisible: false
    });
  };

  editScore = (team, score) => {
    this.props.editScore(team, score);
    this.handleCancel();
  };

  editTeamName = (team, teamName) => {
    this.props.editTeamName(team, teamName);
    this.handleCancel();
  };

  handleOk = () => {
    this.editTeamName(this.state.targetTeam, this.state.teamName);
    this.handleCancel();
  };

  onChange = e => {
    this.setState({
      teamName: e.target.value
    });
  };

  render() {
    return (
      <div className="leaderboard sideboard">
        <Modal
          onCancel={this.handleCancel}
          title="Edit score"
          visible={this.state.inputVisible}
          onOk={() => this.editScore(this.state.targetTeam, this.state.score)}
        >
          <InputNumber min={1} step={10} onChange={this.inputScoreChange} />
        </Modal>
        <Modal
          title={"Input Team Name"}
          visible={this.state.inputTeamVisible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        >
          <Input allowClear onChange={this.onChange} />
        </Modal>

        <h1 className="sideboard-title">Leaderboard</h1>
        {this.props.data.map(data => (
          <div>
            <span
              onClick={() => {
                this.showTeamModal(data.team);
              }}
            >
              {data.alias}
            </span>
            <span
              onClick={() => {
                this.showModal(data.team);
              }}
              className="score"
            >
              {data.score}
            </span>
            <Progress
              className={data.team + "-progress"}
              percent={Math.round(data.score / 20)}
              showInfo={false}
            />
          </div>
        ))}
      </div>
    );
  }
}
