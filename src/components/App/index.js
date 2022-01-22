import "./index.css";
import Header from "../Header/";
import Main from "../Main/";
import Aside from "../Aside/";



function App() {
  console.log("app started")
  return (
    <div className="App">
    <div className="App-wrapper">
      <Header></Header>
      <Main></Main>
      <Aside></Aside>
    </div>
      
    </div>
  );
}

export default App;



