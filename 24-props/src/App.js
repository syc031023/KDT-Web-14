import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from "./Button"
import FavoriteFood from './Practice1';
import BookInformation from './Practice2';
import ShowConsole from './Practice3';
import Box from './Box';
import PageLayout from './PageLayout';

function App() {
  const myFunc = () => {
    console.log("콘솔 띄우기 성공!");
  }
  return (
    <div className="App">
      {/* <FunctionComponent name="새싹">
      </FunctionComponent>
      <hr />

      <ClassComponent name="새싹"></ClassComponent>
      <ClassComponent></ClassComponent>
      <hr />

      <Button link="http://www.google.com">Google</Button> */}

      {/* 실습 1 */}
      {/* <FavoriteFood></FavoriteFood> */}

      {/* 실습 2 */}
      {/* <BookInformation></BookInformation> */}

      {/* 실습 3 */}
      {/* <ShowConsole text="안녕" valid={myFunc}></ShowConsole> */}

      {/* <Box>
        <h1>이건 children으로 들어간 콘텐츠!</h1>
        <p>react children은 컴포넌트 안에 들어가는 모든 콘텐츠</p>
      </Box> */}

      <PageLayout>
        <h2>홈페이지 콘텐츠</h2>
        <h3>여기는 홈페이지</h3>
      </PageLayout>
    </div>
  );
}

export default App;
