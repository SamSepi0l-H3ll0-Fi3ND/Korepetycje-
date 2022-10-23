import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Subjects from "./components/Subjects";
import Steps from "./components/Steps";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Card></Card>
      <SearchBar></SearchBar>
      <Subjects></Subjects>
      <Steps></Steps>
    </div>
  );
}

export default App;
