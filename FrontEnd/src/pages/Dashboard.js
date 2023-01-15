import Nav from "../components/Nav";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Steps from "../components/Steps";
import Subjects from "../components/Subjects";
import Footer from "../components/Footer";
import StepsEarn from "../components/StepsEarn";
import { useState } from "react";

const Dashboard = () => {

  const [token, setToken] = useState(() =>
  localStorage.getItem("Tajny numerek")
);

  return (
    
    <div>
      <Nav token={token} setToken={setToken}></Nav>
      <Card token={token}></Card>
      <SearchBar></SearchBar>
      <Subjects></Subjects>
      <Steps></Steps>
      <StepsEarn></StepsEarn>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
