import "../App.css";
import { Col, Row } from "react-bootstrap";

const MainSection = () => {
  return (
    <Col className=" mainPage d-flex" xs={12} md={{ span: 6, offset: 3 }}>
      <Row>
        <Col xs={9} lg={11} className=" mainLinks d-none d-md- mx-auto">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row className="row">
        <Col xs={10}>
          <div id="rock">
            <h2>Rock classNameics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></div>
          </div>
        </Col>
      </Row>
      <Row className="row">
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MainSection;
