import { useState, useEffect} from 'react'; 

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinCost, setCoincost] = useState(0);
  const [coinSymbol, setCoinSymbol] = useState("");
  const [money, setMoney] = useState(0);
  const selectChanged = (e) => {
    setCoincost(e.target.value);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setMoney(e.target[0].value);
  };
  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(res => res.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
   }, []);

  return (
    <div>
      <h1>how many? {loading? "": coins.length}</h1>
        {loading? 
          <strong>
            Loading...
          </strong> : 
          <div>
            <form onSubmit={handleInput}>
              {/* <label htmlFor="money">
                USD: 
              </label> */}
              <input id="money" type="text" placeholder="how much do you have?"/>
              <button>submit</button>
            </form>
            <select onChange={selectChanged}>
              <option>choose!</option>
              {coins.map(coin => (
              <option key={coin.id} value={coin.quotes.USD.price}> {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
              ))}
            </select>
            {money? <h3>you can buy {(money/coinCost).toFixed(3)} {coinSymbol}</h3>: null}
          </div>
        }     

      
    </div>
    )
};
export default App;


// 1. list는 형제끼리 고유한 key값을 가져야 한다
// 2. 대부분 데이터의 ID값(?), 안되면 index(성능, state오류 문제로 비추)
// 3. list생성 구문을 component로 분리하더라도 선언이 아닌 호출될 때 할당해준다
// 4. 변수에 선언, 인라인 둘 다 가능, 