import React from 'react';
import { Modal, Button } from 'antd';

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      backgroundColor: 'lightblue'
    };
  }

  handleModalButton = color => {
    this.setState({
      visible: false
    });
    this.changeColor(color)
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  changeColor = color => {
    this.setState({
      backgroundColor: color,
    })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    return (
      <div>
        <Modal
          title="Topic: Geology"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button onClick={() => this.handleModalButton('black')}>
              Wrong
            </Button>,
            <Button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => this.handleModalButton('green')}>
              Correct
            </Button>,
            <Button style={{ backgroundColor: 'yellow', color: 'white' }} onClick={() => this.handleModalButton('yellow')}>
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
        <a onClick={this.showModal}>
          <div className="field" style={{ backgroundColor: this.state.backgroundColor }}>
            tes
          </div>
        </a >
      </div>
    );
  }
}
