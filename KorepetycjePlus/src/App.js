import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Subjects from "./components/Subjects";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Card></Card>
      <SearchBar></SearchBar>
      <Subjects></Subjects>
    </div>
  );
}

export default App;
