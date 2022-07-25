import Home from "./home.js";
import Detail from "./detail.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

// url의 차이
// 1. Hash Router: # url
// 2. BrowswerRouter: nomal,

// Routes: 안에 Route 두 개를 넣으면 동시에 렌더링 ???

// a태그를 추가하여 route할 수도 있지만 페이지 전체가 재실행 됨
// => Link를 이용
