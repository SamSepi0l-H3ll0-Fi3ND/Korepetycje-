import Nav from "../components/Nav";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Steps from "../components/Steps";
import Subjects from "../components/Subjects";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div>
      <Nav></Nav>
      <Card></Card>
      <SearchBar></SearchBar>
      <Subjects></Subjects>
      <Steps></Steps>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
