import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Alumni from "./Pages/OurTeam/Alumni/Alumni";
import Board from "./Pages/OurTeam/Board/Board";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="our-team">
        <Route path="alumni" element={<Alumni />} />
        <Route path="board" element={<Board />} />
      </Route>
    </Routes>
  );
}

export default App;
