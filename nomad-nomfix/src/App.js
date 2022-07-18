import { useState, useEffect } from 'react'; 


function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => (prev + 1));
  console.log('i run all the time');
  const runOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(runOnlyOnce, []); 

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    if (keyword !== ""){
      console.log("seach FOR", keyword);
    }
  }, [keyword]);
  return (
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" />
      <h1>{counter}</h1>
      <button onClick = {onClick}>
      </button>
      
    </div>
  );
}

export default App;
