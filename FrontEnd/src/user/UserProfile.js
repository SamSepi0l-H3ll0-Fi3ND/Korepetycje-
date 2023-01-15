import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect } from "react";
import { useState } from "react";
import API from "../env";
import Review from "../components/Review";
import AdWithDelete from "../components/AdWithDelete";
const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [ann, setAnnouncements] = useState(null);
  const [reviews, setReviews] = useState(null);

  const deleteOneAnnouncement = (id) => {
    const newData = ann.filter(x=>x.id !== id)
    setAnnouncements(newData)
  }

    useEffect(() => {
      try {
      fetch(`${API}/User/myaccount`, {
        method: "GET",
        headers: {
          Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
          accept: "text/plain",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setAnnouncements(data.announcements);
          try {
            fetch(`${API}/Review/${data.id}`, {
              method: "GET"
            })
              .then((response) => response.json())
              .then((data) => {
                setReviews(data)
              });
          } catch (error) {
            console.log(error, error.message);
          }
        });
    } catch (error) {
      console.log(error, error.message);
    }
    }, []);


  return (
    <div className="bg-white h-screen">
      <Nav></Nav>
      <div className="flex justify-between flex-wrap h-1/6 bg-dark-blue text-light-blue border-solid border-8 border-white w-full">
        <Link state={user} to="/useredit">
          <SettingsIcon className="fill-white"></SettingsIcon>
        </Link>
        <div className="text-4xl self-center text-white text-center mt-4 ">
          Witaj na profilu użytkownika {user.firstName} {user.lastName} !
        </div>
        <div></div>
      </div>
      <div className="flex flex-wrap h-1/6 bg-dark-blue text-light-blue justify-center border-solid border-8 border-white w-full">
        <div className="grid grid-cols-6 gap-4 mt-8 text-center">
          <div className="flex flex-col space-y-2 ">
            <p>Imię </p>
            <p className="text-white text-2xl"> {user.firstName} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p> Nazwisko</p>
            <p className="text-white text-2xl"> {user.lastName} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Adres</p>
            <p className="text-white text-2xl"> {user.address} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Ocena </p>
            <p className="text-white text-2xl"> {user.rate} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Email</p>
            <p className="text-white text-2xl"> {user.email} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Numer telefonu</p>
            <p className="text-white text-2xl"> {user.phoneNumber} </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-light-blue h-1/3 text-dark-blue px-6 py-6  border-solid border-8 border-white ">
        <p className="text-3xl mb-2">Opis:</p>
        <p className="text-xl">{user.description}</p>
      </div>
      <div className="w-full bg-light-blue h-fit text-dark-blue px-6 py-6  border-solid border-8 border-white ">
        <p className="text-3xl mb-2">Ogłoszenia:</p>
        {ann
          ? ann.map((item) => <AdWithDelete key={item.id} adData={item} deleteAnnouncement={deleteOneAnnouncement} />)
          : null}
      </div>
      <div className="w-full bg-light-blue h-fit text-dark-blue px-6 py-6  border-solid border-8 border-white ">
        <p className="text-3xl mb-2">Recenzje:</p>
        <div>
        {reviews
          ? reviews.map((item) => <Review key={item.id} reviewData={item} />)
          : null}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
