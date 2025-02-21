import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Shuflle from "../assets/playerbuttons/shuffle.png";
import Repeat from "../assets/playerbuttons/repeat.png";
import Prev from "../assets/playerbuttons/prev.png";
import Play from "../assets/playerbuttons/play.png";
import Next from "../assets/playerbuttons/next.png";

const Player = () => {
  const selectedSong = useSelector((state) => state.music.selectedSong);

  return (
    <Container className="fixed-bottom bg-dark bg-container pt-1">
      <Row className="h-100 align-items-center d-flex">
        <Col lg={4} className="d-flex align-items-center">
          {selectedSong && (
            <div>
              <h5 className="text-white">{selectedSong.title}</h5>
              <p className="text-white">{selectedSong.artist.name}</p>
            </div>
          )}
        </Col>
        <Col lg={4} className="text-center">
          <div className="d-flex justify-content-center">
            <a href="#">
              <img src={Shuflle} alt="shuffle" />
            </a>
            <a href="#">
              <img src={Prev} alt="prev" />
            </a>
            <a href="#">
              <img src={Play} alt="play" />
            </a>
            <a href="#">
              <img src={Next} alt="next" />
            </a>
            <a href="#">
              <img src={Repeat} alt="repeat" />
            </a>
          </div>
          <div className="progress mt-3">
            <div role="progressbar"></div>
          </div>
        </Col>
        <Col lg={4} className="text-right"></Col>
      </Row>
    </Container>
  );
};

export default Player;
