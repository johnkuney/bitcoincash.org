import React from "react"
import { Row, Col } from "react-bootstrap"
import tilesStyles from "./tiles.module.css"

const TilesComponent = ({ tiles, md }) => {
  return (
    <Row>
      {tiles.map(item => (
        <Col md={md} className={tilesStyles.tile}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <img src={item.img} alt={item.alt} />
          </a>
        </Col>
      ))}
    </Row>
  )
}

export default TilesComponent
