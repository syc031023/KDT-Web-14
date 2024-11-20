import Counter from "./Counter";
import SayFunction from "./SayFunction";
import Practice1 from "./Practice1";
import Practice2 from "./Practice2";

function App() {
  return (
    <div className="App">
      {/* 클래스형 state */}
      <Counter />
      <hr />

      {/* 함수형 state */}
      <SayFunction />
      <hr />

      {/* 실습 1 */}
      <Practice1 />
      <hr />

      {/* 실습 2 */}
      <Practice2 />
    </div>
  );
}

export default App;
