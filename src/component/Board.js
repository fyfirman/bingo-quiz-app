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
        question:
          "1. A class of muds that contain potassium ion (K+) dissolved in the water phase. They are the most widely accepted water mud system for drilling water-sensitive shales, especially hard, brittle shales is.."
      },
      {
        question:
          "2. According to excess lime content, mention the three class of Lime muds? Answer : (1) low-lime, 0.5 to 2 lbm/bbl, (2) medium-lime, 2 to 4 lbm/bbl and (3) high-lime, over 4 lbm/bbl"
      },
      {
        imagesURI: 'https://i.ibb.co/k9B1sZY/image.png',
        question:
          "3. The annular mud velocity, is usually considered the most important aspect. With formula above. What is dH & dDS …" //images
      },
      {
        question:
          "4. The variation of the Earth's exposure to the sun's rays, or insolation, that results from variations in the orbit of the Earth and the tilt of its axis, and that might affect climate, sea level and sedimentation is…."
      },
      {
        question:
          "5. In Cartesian coordinates, it is the sum of the partial derivatives of each component of the vector field with respect to the corresponding spatial coordinate: div V = ∇·V = ∂Vx/∂x + ∂Vy/∂y + ∂Vz/∂z… "
      },
      {
        question:
          "6. In general, the dominance of seismic technology in reservoir geophysics is because of three factors, mention it .."
      },
      {
        question:
          "7. The space between the shaped charge and the internal surface of the perforating gun body is…"
      },
      {
        question:
          "8. Materials typically found in certain types of barium or strontium scales that may be deposited in the wellbore or production tubulars is…"
      },
      {
        question: "9. What is a conventional method of mapping reservoir parameters in two dimensions, x and y?"
      },
      {
        question:
          "10. The natural form that a section of coiled tubing string will take if spooled from the reel and allowed to rest without any tension applied is.."
      },
      {
        question:
          "11.	Usually an unmanned diving vehicle that performs repairs or maintenance on a subsea well is known as…."
      },
      {
        question:
          "12.	What year was petrobras formed ? "
      },
      {
        question:
          "13.	What Brazilian mining nillionaire began OGX company in 2007 ? "
      },
      {
        question:
          "14.	The preference of a solid to contact one liquid or gas, known as the wetting phase, rather than another call as?"
      },
      {
        question:
          "15.	What is the term for the unit used to remove minute water particles from natural gas if dehydration was not attained using separators"
      },
      {
        question:
          "16.	A unit of measurement established by the American Petroleum Institute (API) that indicates the density of a liquid call as?"
      },
      {
        question:
          "17.	A small variable profile valve put in a flowline and used with a pilot to restrict the flow into the pilot and make the pilot more or less sensitive to changing conditions."
      },
      {
        question:
          "18.	Referring to the flow of two immiscible fluids, oil and water, oil and gas, or gas and water"
      },
      {
        question:
          "19.	The solution to the diffusion equation that results when the well (inner) boundary condition is treated as a cylinder of finite radius instead of treating the well as a line source."
      },
      {
        question:
          "20.	Organic matter normally decomposes on the death of the plant or animal and is only preserved under conditions of …… and….."
      },
      {
        question:
          "21.	What conditions are required for Darcy’s Law to be valid?"
      },
      {
        imagesURI: "https://i.ibb.co/TYF32Qy/image.png",
        question:
          "22.	Figure question, what is the graph for ?"
      },
      {
        question:
          "23.	In what basin were the giant Tupi and Jupiter fields discovered in?"
      },
      {
        question:
          "24.	When and Where was the first oil refinery built?"
      },
      {
        question:
          "25.	When SPE Java Indonesia section was established?"
      }
    ];

    const board = [];
    for (var i = 0; i < boardSize.row; i++) {
      var rows = [];
      for (var j = 0; j < boardSize.col; j++)
        rows.push(
          <Col key={1} span={4} className="five-divide">
            <Field
              imagesURI={questionData[i * boardSize.row + j].imagesURI}
              increaseScore={this.props.increaseScore}
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
