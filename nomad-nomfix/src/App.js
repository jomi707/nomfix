import Home from "./home.js";
import Detail from "./detail.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          basename={process.env.PUBLIC_URL}
          path="/"
          element={<Home />}
        ></Route>
        <Route
          basename={process.env.PUBLIC_URL}
          path="/movie/:id"
          element={<Detail />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

// :id는 usePrams로 url 값을 가져올 때 객체 prop의 이름이다(간단히 변수명)
// detail.js 에서 useParams를 이용해 :id의 값(url 정보) 를 가져와서
// fetch로 해당 api에 다시 요청
