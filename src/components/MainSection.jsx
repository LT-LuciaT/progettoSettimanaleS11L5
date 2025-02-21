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
    <Col className="mainPage d-flex" xs={12} md={{ span: 6, offset: 3 }}>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex mx-auto">
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
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {rock.map((song, index) => (
                <AlbumCard key={index} singleSong={song} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {pop.map((song, index) => (
                <AlbumCard key={index} singleSong={song} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="row">
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {hipHop.map((song, index) => (
                <AlbumCard key={index} singleSong={song} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MainSection;
