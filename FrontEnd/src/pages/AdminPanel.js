import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect } from "react";
import { useState } from "react";
import API from "../env";
import ReviewWithDelete from "../components/ReviewWithDelete";
import AdWithDelete from "../components/AdWithDelete";
import UserCard from "../components/UserCard"
const AdminPanel = () => {
  const [user, setUser] = useState();
  const [users, setUsers] = useState();
  const [announcements, setAnnouncements] = useState();
  const [reviews, setReviews] = useState();

  const deleteUser = (id) => {
    fetch(`${API}/User/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (response.ok) setUsers(users.filter(user => user.id !== id));
      })
  };

  const deleteReview = (id) => {
    fetch(`${API}/Review/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (response.ok) setUsers(users.filter(user => user.id !== id));
      })
  };

  const deleteOneAnnouncement = (id) => setAnnouncements(announcements.filter(x => x.id !== id));

  const getRole = (token) => {
    if(!token) token = localStorage.getItem("Tajny numerek");
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return (JSON.parse(jsonPayload))["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
}

  try {
    useEffect(() => {
      fetch(`${API}/User/myaccount`, {
        method: "GET",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));

      fetch(`${API}/Announcements`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setAnnouncements(data));

      fetch(`${API}/User`, {
        method: "GET",
        headers: {
          Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
          "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(data => setUsers(data));

      fetch(`${API}/Review`, {
        method: "GET",
        headers: {
          Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
          "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(data => {setReviews(data); console.log(reviews); console.log(getRole("eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxIiwiZXhwIjoxNjczOTA0MTg1fQ.lRFdRRgmxv8ywPLx2UnbZSJ3DgudQWYi0uZZnaTRGuoTuFXjRQKhX9bOIKhZw-PvFLynsaI5pp0EuojDIi9KZA"));});
    }, []);
  } catch (error) {
    console.log(error, error.message);
  }

  return (
    <div className="bg-white h-screen">
      <Nav></Nav>
      <div className="flex flex-wrap justify-center h-62 bg-dark-blue text-light-blue border-solid border-8 border-white w-full">
        <div className="bg-dark-blue text-light-blue w-full">
          <Link state={user} to="/useredit">
            <SettingsIcon />
          </Link>
        </div>
        <div className="text-4xl text-white justify-center mb-8">
          Panel administracyjny
        </div>
      </div>

      <div className="w-full bg-light-blue h-fit text-dark-blue p-10  border-solid border-8 border-white">
        <p className="text-3xl mb-2">Użytkownicy:</p>
        <div className="grid grid-cols-7 gap-4 mt-8 rounded-md text-center bg-dark-blue text-white m-10">
          <div className="flex flex-col space-y-2 ">
            <p className="text-white text-2xl"> Imię </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-2xl"> Nazwisko </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-2xl"> Adres </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-2xl"> Ocena  </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-2xl"> Email </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-2xl"> Telefon </p>
          </div>
        </div>
        <div className="max-h-96 overflow-y-scroll">
          {users?.map(user => <UserCard key={user.id} user={user} delete={() => deleteUser} />)}
        </div>
      </div>
      <div className="w-full bg-light-blue h-fit text-dark-blue p-10  border-solid border-8 border-white">
        <p className="text-3xl mb-2">Ogłoszenia:</p>
        <div className="max-h-96 overflow-y-scroll">
          {announcements?.map((item) => <AdWithDelete key={item.id} adData={item} deleteAnnouncement={() => deleteOneAnnouncement} />)}
        </div>

      </div>
      <div className="w-full bg-light-blue h-fit text-dark-blue p-10  border-solid border-8 border-white">
        <p className="text-3xl mb-2">Opinie:</p>
        <div className="max-h-96 overflow-y-scroll">
          {reviews?.map(review => <ReviewWithDelete key={review.id} review={review} delete={() => deleteReview} />)}
        </div>
      </div>
    </div>
  );
};
export default AdminPanel;
