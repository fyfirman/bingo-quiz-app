import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import Field from './component/Field';
import { Button, Row, Col } from 'antd';

export default class App extends React.Component {
  render() {
    const boardSize = {
      row: 5,
      col: 5
    };
    const board = [];
    for (var i = 0; i < boardSize.row; i++) {
      var rows = [];
      for (var j = 0; j < boardSize.col; j++)
        rows.push(
          <Col key={1} span={4}>
            <Field />
          </Col>
        );
      board.push(<Row gutter={[8, 8]}> {rows} </Row>);
    }
    return (
      <div>
        {board}
      </div>
    );
  }
}
