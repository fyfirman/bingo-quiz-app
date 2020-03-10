import React from 'react';
import { Modal, Button, InputNumber } from 'antd';

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionVisible: false,
      inputVisible: false,
      backgroundColor: 'lightblue'
    };
  }

  handleWrongButton = e => {
    this.setState({
      questionVisible: false
    });
    this.changeColor('black');
  }

  handleModalButton = color => {
    this.showInputModal();
    this.setState({
      questionVisible: false
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

  render() {
    return (
      <div>
        <Modal
          onCancel={this.handleCancel}
          title="Input score"
          visible={this.state.inputVisible}
          footer={[
            <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={this.handleCancel}>
              Add score
          </Button>,
          ]}
        >
          <InputNumber min={0} max={100} step={10}/>
        </Modal>
        <Modal
          title="Topic: Geology"
          visible={this.state.questionVisible}
          onCancel={this.handleCancel}
          footer={[
            <Button onClick={this.handleWrongButton}>
              Wrong
            </Button>,
            <Button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => this.handleModalButton('green')}>
              Correct
            </Button>,
            <Button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => this.handleModalButton('blue')}>
              Correct
            </Button>,
            <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => this.handleModalButton('red')}>
              Correct
            </Button>,
          ]}
        >
          <p>When a source rock is examined under a reflectance microscope, the amount of light reflected by this plant organic matter helps define the maturity of the source rock. Name this organic matter! </p>
        </Modal>
        <a onClick={this.showQuestionModal}>
          <div className="field" style={{ backgroundColor: this.state.backgroundColor }}>
            tes
          </div>
        </a >
      </div>
    );
  }
}
