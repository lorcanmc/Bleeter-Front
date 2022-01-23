import "./index.css";
import NavBar from "../NavBar/";
import Main from "../Main/";
import Aside from "../Aside/";



function App() {
  console.log("this is the development branch");
  return (
    <div className="App">
    <div className="App-wrapper">
      <NavBar></NavBar>
      <Main></Main>
      <Aside></Aside>
    </div>
      
    </div>
  );
}

export default App;



