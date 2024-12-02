import "./App.css";
import Faq from "./components/Faq";
import Form from "./components/Form";
import UseCallback2 from "./components/UseCallback2";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallbackPrac from "./components/UseCallbackPrac";
import UseMemoEx from "./components/UseMemoEx";
import UseReducerEx from "./components/UseReducerEx";

function App() {
  return (
    <div className="App">
      <UseMemoEx></UseMemoEx>
      <hr />

      <UseCallbackEx1 />
      <hr />

      <UseCallback2 postId={9} />
      <hr />

      <UseCallbackPrac></UseCallbackPrac>
      <hr />

      <UseReducerEx></UseReducerEx>
      <hr />

      <Faq />
      <hr />

      <Form />
    </div>
  );
}

export default App;
