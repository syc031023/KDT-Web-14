import logo from './logo.svg';
import './App.css';


function App() {

  // const name = "영채";
  // const student = "KDT14"
  // const style = {
  //   backgroundColor: "orange",
  //   fontSize: "30px"
  // }

  const name = "무뎅";
  const animal = "하마";

  const a = 10;
  const b = 7;

  const title = "실습 4";

  return (
    <div className="App">
       {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* JSX 문법 */}
      {/* 1. 하나로 감싸인 요소 */}

      {/* 2. Javascript 표현식 사용 
        - {}로 감싸면 js 표현식 사용 가능
        - {}에서 삼항연산자, 단축 평가 등 사용 가능 (if, for 사용 불가)
      */}
      {/* <div>{name}</div>
      <div>{student === "KDT14" ? "kdt14기 수강생이군요" : "누구세요"}</div> */}

      {/* 3. css 속성
        - 리액트에서 돔 요소에 스타일 적용 시 문자열 x -> 객체 사용
        - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성
      */}
      {/* <div style={{ backgroundColor: "blue", fontSize: "24px" }}>하이</div>
      <div style={style}>하이</div> */}

      {/* 4. className 사용
        - class -> className

        5. 종료 태그가 없는 태그의 사용
        - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
        - 잘못된 예) <input>, <br>
        - 올바른 예) <input />, <br />

        6. 주석
        - //: jsx 외부 주석
      */}


      {/* 실습 1 */}
      {/* <h2>제 반려동물의 이름은 {name}입니다. {name}이는 {animal}입니다.</h2> */}

      {/* 실습 2 */}
      {/* <span>{ 3+5 == 8 ? "정답입니다!" : "오답입니다!" }</span> */}

      {/* 실습 3 */}
      {/* <span> { a>b && "a가 b보다 큽니다" } </span> */}

      {/* 실습 4 */}
      <div className="form-box">
      <h1>{title}</h1>
      <div className="input-box">아이디: <input type="text" id="id" /></div>
      <div className="input-box">비밀번호: <input type="text" id="pw" /></div>
      </div>
    </div> 
    

  );
}

export default App;
