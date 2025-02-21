import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from "../redux/azioni/actions";
import AlbumCard from "./AlbumCard";
import "../App.css";

const MainSection = () => {
  const dispatch = useDispatch();
  const { rock, pop, hipHop, loading, error } = useSelector((state) => state.music);

  useEffect(() => {
    dispatch(fetchMusic("queen", "rock"));
    dispatch(fetchMusic("bts", "pop"));
    dispatch(fetchMusic("nf", "hipHop"));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Col className="mainPage d-flex flex-column align-items-center" xs={12} md={{ span: 8, offset: 2 }}>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex justify-content-center mb-4">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <div>
        <Col xs={12}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row
              xs={1}
              sm={2}
              md={3}
              lg={4}
              className="g-4"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              {rock.map((song, index) => (
                <AlbumCard key={index} singleSong={song} />
              ))}
            </Row>
          </div>
        </Col>
      </div>
      <div className="mt-4">
        <Col xs={12}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row
              xs={1}
              sm={2}
              md={3}
              lg={4}
              className="g-4"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              {pop.map((song, index) => (
                <AlbumCard key={index} singleSong={song} />
              ))}
            </Row>
          </div>
        </Col>
      </div>
      <div className="mt-4">
        <Col xs={12}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row
              xs={1}
              sm={2}
              md={3}
              lg={4}
              className="g-4"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              {hipHop.map((song, index) => (
                <AlbumCard key={index} singleSong={song} />
              ))}
            </Row>
          </div>
        </Col>
      </div>
    </Col>
  );
};

export default MainSection;
