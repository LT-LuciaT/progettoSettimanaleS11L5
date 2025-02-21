import "./App.css";
import Mynav from "./components/Mynav";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
function App() {
  return (
    <>
      <Mynav />
      <div>
        <MainSection />
      </div>
      <Player />
    </>
  );
}

export default App;
