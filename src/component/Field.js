import React from 'react';
import { Modal } from 'antd';

export default class Field extends React.Component {
  state = { visible: false };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

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
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>When a source rock is examined under a reflectance microscope, the amount of light reflected by this plant organic matter helps define the maturity of the source rock. Name this organic matter! </p>
        </Modal>
        <a onClick={this.showModal}>
          <div className="field" style={{ backgroundColor: "lightblue" }}>
            tes
          </div>
        </a >
      </div>
    );
  }
}
