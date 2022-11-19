import Nav from "../components/Nav";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Steps from "../components/Steps";
import Subjects from "../components/Subjects";
import Footer from "../components/Footer";
import StepsEarn from "../components/StepsEarn";

const Dashboard = () => {
  return (
    <div>
      <Nav></Nav>
      <Card></Card>
      <SearchBar></SearchBar>
      <Subjects></Subjects>
      <Steps></Steps>
      <StepsEarn></StepsEarn>
      <Footer></Footer>
 
    </div>
  );
};

export default Dashboard;
