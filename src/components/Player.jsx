import "../App.css";
import { Container, Row } from "react-bootstrap";
import Shuflle from "../assets/playerbuttons/shuffle.png";
import Repeat from "../assets/playerbuttons/repeat.png";
import Prev from "../assets/playerbuttons/prev.png";
import Play from "../assets/playerbuttons/play.png";
import Next from "../assets/playerbuttons/next.png";

const Player = () => {
  return (
    <Container className="fixed-bottom bg-container pt-1">
      <Row className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex ">
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
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Player;
