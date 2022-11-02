import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Subjects from "./components/Subjects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer"

import Steps from "./components/Steps";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Card></Card>
      <SearchBar></SearchBar>
      <Subjects></Subjects>
      <SignIn></SignIn>
      <SignUp></SignUp>
      <Steps></Steps>
      <Footer></Footer>
    </div>
  );
}

export default App;
