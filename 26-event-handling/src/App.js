// import logo from './logo.svg';
import './App.css';
// import SyntheticEvent from './SyntheticEvent';
// import ClassBind from './ClassBind';
// import Counter from './Counter';
import HandlerEx from './components/ex/HandlerEx';
import HandlerEx2 from './components/ex/HandlerEx2';
import HandlerEx3 from './components/ex/HandlerEx3';
import Practice from './components/ex/Practice';
import ExAll from './practice/ExAll';

function App() {
  return (
    <div className="App">
      {/* 합셩 이벤트 */}
      {/* <SyntheticEvent></SyntheticEvent> */}
      <hr />
      {/* 클래스형 */}
      {/* <ClassBind></ClassBind>
      <hr />
      <Counter></Counter> */}
  
      {/* 실습 */}
      {/* <HandlerEx></HandlerEx>
      <hr />
      <HandlerEx2></HandlerEx2>
      <hr />
      <HandlerEx3></HandlerEx3> */}

      {/* practice */}
      {/* <Practice></Practice> */}
      <ExAll></ExAll>
    </div>
  );
}

export default App;
