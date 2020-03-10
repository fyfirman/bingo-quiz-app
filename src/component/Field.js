import React from 'react';
import { Modal, Button, InputNumber } from 'antd';
import './css/Field.css';

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionVisible: false,
      inputVisible: false,
      backgroundColor: '',
      targetTeamToInc: '',
      buttonStatus: false
    };
  }

  handleWrongButton = e => {
    this.setState({
      questionVisible: false
    });
    this.changeColor('#393939');
  }

  handleModalButton = color => {
    this.showInputModal();
    this.setState({
      questionVisible: false,
      targetTeamToInc: color
    });
    this.changeColor(color)
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      questionVisible: false,
      inputVisible: false
    });
  };

  changeColor = color => {
    switch(color){
      case 'red':
        color = '#D43637';
        break;
      case 'green':
        color = '#3D8057';
        break;
      case 'yellow':
        color = '#F98926';
        break;
      default:

    }
    this.setState({
      backgroundColor: color,
    })
  }

  showQuestionModal = () => {
    this.setState({
      questionVisible: true,
    });
  };

  showInputModal = () => {
    this.setState({
      inputVisible: true,
    });
  };

  handleInput = (team, score) => {
    this.handleCancel();
    this.increaseScore(team, score);
  }

  inputAddScoreChange = (value) => {
    this.setState({
      addScore: value,
      buttonStatus: true
    });
  }

  increaseScore = (team, score) => {
    this.props.increaseScore(team, score);
  }

  render() {
    return (
      <div>
        <Modal
          closable={false}
          onCancel={this.handleCancel}
          title="Input score"
          visible={this.state.inputVisible}
          footer={[
            <Button onClick={() => this.handleInput(this.state.targetTeamToInc, this.state.addScore)} disabled={!this.state.buttonStatus}>
              Add score
            </Button>,
          ]}
        >
          <InputNumber min={1} max={200} step={10} onChange={this.inputAddScoreChange} />
        </Modal>
        <Modal
          title={'Topic: ' + this.props.topic}
          visible={this.state.questionVisible}
          onCancel={this.handleCancel}
          width={900}
          footer={[
            <Button onClick={this.handleWrongButton}>
              Wrong
            </Button>,
            <Button style={{ backgroundColor: '#F98926', color: 'white' }} onClick={() => this.handleModalButton('yellow')}>
              Correct
            </Button>,
            <Button style={{ backgroundColor: '#3D8057', color: 'white' }} onClick={() => this.handleModalButton('green')}>
              Correct
            </Button>,
            <Button style={{ backgroundColor: '#D43637', color: 'white' }} onClick={() => this.handleModalButton('red')}>
              Correct
            </Button>,
          ]}
        >
          <p>{this.props.question}</p>
        </Modal>
        <a onClick={this.showQuestionModal}>
          <div className="field" style={{ backgroundColor: this.state.backgroundColor }}>
          </div>
        </a >
      </div>
    );
  }
}
