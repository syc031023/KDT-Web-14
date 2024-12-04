import './App.css';
import { useSelector, useDispatch } from "react-redux";

function App2() {
  // store에 있는 상태 가져오기 - useSelector 이용
    const isVisible = useSelector((state) => state.isVisible);

  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h2>isVisible 값은 "{isVisible ? "참" : "거짓"}"이다.</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4 />
    </div>
  );
};

const Box4 = () => {
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>Box4</h2>
      <button onClick={() => dispatch({ type: "CHANGE" })}>CHANGE</button>
    </div>
  )
}

export default App2;
