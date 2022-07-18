import logo from './logo.svg';
// import './App.css';
import { useState, memo } from 'react'; // ?
import styles from "./App.module.css"
// import PropTypes from "prop-types";


function Btn({ text, onClick }) {
  console.log(text, onClick);
  return (
    <button
      className={styles.app}
      onClick={onClick}
      // style={{
      //   backgroundColor: "grey",
      //   color: "white",
      //   padding: "10px 20px", 
      //   border: 0,
      //   borderRadius: 10, 
      // }}
      >
      {text}
    </button>
  );
}; 

// type 검사인데 필요하면 찾아보자
// Btn.propTypes = {
//   text: propTypes.string,
//   onClick: propTypes.function,
// }

// memo, prop의 변화가 없으면 리렌더 안함
const MemorizedBtn = memo(Btn);

function App() {
    const [btnName, setBtnName] = useState("Save ");
    const changeValue = () => setBtnName("Revert");
  return (
    <div className="App">
      {/* 컴포넌트에 쓰는 모든 값은 props이다아 ~, 이벤트가 적용되는게 아님*/}
      <MemorizedBtn text={btnName} onClick={changeValue} />  
      {/* {text: "go", x: false, y: 5} 식으로 인자에 들어간다 */}
      <MemorizedBtn text="continue"/>
    </div>
  );
}

export default App;
