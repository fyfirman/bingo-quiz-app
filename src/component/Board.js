import React from "react";
import Field from "./Field";
import { Row, Col } from "antd";

export default class Board extends React.Component {
  render() {
    const boardSize = {
      row: 5,
      col: 5
    };

    const questionData = [
      {
        topic: "Geology",
        question:
          "When a source rock is examined under a reflectance microscope, the amount of light reflected by this plant organic matter helps define the maturity of the source rock. Name this organic matter!"
      },
      {
        topic: "Trivia",
        question:
          "This is a double logarithmic plot based on the Archie Equation of a resistivity measurement on the x-axis versus a porosity measurement on the y-axis. Water resistivities can be determinated from lines drawn on this plot. What is this plot called?"
      },
      {
        topic: "Production",
        question:
          "3	It’s he amount of time a liquid stays in a vessel. It assures that equilibrium between the liquid and gas has been reached at separator pressure. Name it..."
      },
      {
        topic: "Geology",
        question:
          "What kind of factor that will change of litological type in reservoir?"
      },
      {
        topic: "Drilling",
        question:
          "This fluid  used to separate drilling fluids and cementing slurrie, it  can be designed for use with either water-based or oil-based drilling fluids and prepares both pipe and formation for the cementing operation. What is the terminology of this fluid?"
      },
      {
        topic: "Geophysicst",
        question:
          "What type of wireline log that have similar operational principle with Proximity Log?"
      },
      {
        topic: "Drilling",
        question:
          "This kind of device is commonly called a three-phase separator because it can separate gas, oil and free water. The liquids that are discharged from it are further treated in vessels called treaters. What is this kind of device called?"
      },
      {
        topic: "Production",
        question:
          "What important additive addition could be made to a Portland cementation to improve its high-pressure / high-temperature (HPHT) stability? "
      },
      {
        topic: "Trivia",
        question: "What is the largest merger in American History?"
      },
      {
        topic: "Geology",
        question:
          "What’s name of a fault that is created in an actively forming basin. It is often parallel to the shore line when created?"
      },
      {
        topic: "Trivia",
        question:
          "Projection of geology condition along the line in one area at the vertical front from a stone which the function are to know the stratification position from each stone and to know the track of geology structure : sincline, anticline. Means for ..... "
      },
      {
        topic: "Geophysicst",
        question:
          "What is geophysical method that commonly use in oil reservoir delineation? "
      },
      {
        topic: "Drilling",
        question:
          "CALCULATION. Calculation problem! Calculate the API density if we have specific gravity 0,879 !"
      },
      {
        topic: "Production",
        question:
          "This phenomenon can occur anywhere in the production system, either at bottomhole or in surface lines and equipment. It is the loss of metal due to chemical or electrochemical reactions, which could eventually destroy a structure. The rate of it will vary with time depending on the particular conditions of the oil field, such as the amount of water produced, secondary recovery operations and pressure variations. Name it! "
      },
      {
        topic: "Drilling",
        question:
          "These tools are used for placing very small volumes of plugging material precisely and economically, and can be run on wireline, slickline, or sandline, depending on the tool. This tools usually called as? "
      },
      {
        topic: "Trivia",
        question:
          "Which is true or false, that the most of the world’s proven oil reserves are located in South America?"
      },
      {
        topic: "Geophysicst",
        question:
          "What is the term of the seismic data recorded for one channel.This is a recording of the Earth's response to seismic energy passing from the source, through subsurface layers, and back to the receiver… "
      },
      {
        topic: "Production",
        question:
          "This is a sand-control method used to prevent production of formation sand. In these operations, a steel screen is placed in the wellbore and the surrounding annulus packed with prepared gravel of a specific size designed to prevent the passage of formation sand. The primary objective is to stabilize the formation while causing minimal impairment to well productivity. What is the name of the method?"
      },
      {
        topic: "Geology",
        question:
          "This is a velocity gradient measured across the diameter of a fluid-flow channel, be it a pipe, annulus or other shape. It is the rate of change of velocity at which one layer of fluid passes over an adjacent layer. Name this velocity gradient!"
      },
      {
        topic: "Drilling",
        question:
          "This process of cementing usually done to correct problems associated with the primary cement job, called as ? "
      },
      {
        topic: "Trivia",
        question:
          "In an effort to integrate, Anglo-Persian purchased one of the largest pipeline networks in the United Kingdom. What was the name of the company that owned the pipeline?  "
      },
      {
        topic: "Reservoir",
        question:
          "This function has been used for correlating capillary pressure data for rocks with similar pore types and wettability, but with different permeabilities. What is this function called?"
      },
      {
        topic: "Drilling",
        question:
          "A list containing details of tubulars that have been prepared for running, or that have been retrieved from the wellbore. Each tubing joint is numbered and the corresponding length and other pertinent details noted alongside. What is it ? "
      },
      {
        topic: "Trivia",
        question:
          "What kind of methods of predicting the oil formation volume factor that presented a graphical correlation for estimating the oil formation volume factor with the gas solubility, gas gravity, oil gravity, and reservoir temperature as the correlating parameters? "
      },
      {
        topic: "Reservoir",
        question:
          "We can group permeability divided by viscosity into a term. Mention this term"
      }
    ];

    const board = [];
    for (var i = 0; i < boardSize.row; i++) {
      var rows = [];
      for (var j = 0; j < boardSize.col; j++)
        rows.push(
          <Col key={1} span={4} className="five-divide">
            <Field
              increaseScore={this.props.increaseScore}
              topic={questionData[i * boardSize.row + j].topic}
              question={questionData[i * boardSize.row + j].question}
              content={i*boardSize.row + j + 1}
            />
          </Col>
        );
      board.push(<Row gutter={[8, 8]}> {rows} </Row>);
    }
    return <div>{board}</div>;
  }
}
