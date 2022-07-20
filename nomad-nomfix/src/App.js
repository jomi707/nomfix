import { useState } from 'react'; 


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    setTodos(cur => [todo, ...cur]);
    setTodo("");
  }
  console.log(todos);
  return (
    <div>
      <h1>hopes ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="What is your bucket list?"/>
        <button>submit</button>
      </form>
      <ul>
        {todos.map((item, index) => // {} 를 써서 오류남, 한 줄이라 그런가 한 줄에도 써도 될텐데?
          <li key={index}>{item}</li> // 또는 선언 쪽에서
        )}
      </ul>
    </div>
    
  );
}

export default App;

// 1. list는 형제끼리 고유한 key값을 가져야 한다
// 2. 대부분 데이터의 ID값(?), 안되면 index(성능, state오류 문제로 비추)
// 3. list생성 구문을 component로 분리하더라도 선언이 아닌 호출될 때 할당해준다
// 4. 변수에 선언, 인라인 둘 다 가능, 선택임