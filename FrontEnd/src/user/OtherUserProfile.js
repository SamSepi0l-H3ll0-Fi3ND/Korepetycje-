import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useState } from "react";
import API from "../env";
import Review from "../components/Review";
import Ad from "../components/Ad";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

const OtherUserProfile = () => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const [user, setUser] = useState([]);
    const [ann, setAnnouncements] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [rate,setRate] = useState(null);
    const [description, setDescription] = useState(null);

    const [token, setToken] = useState(() =>
    localStorage.getItem("Tajny numerek"));


    useEffect(() => {
      try {
      const response = fetch(`${API}/User/${state}`, {
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
            const response = fetch(`${API}/Review/${data.id}`, {
              method: "GET"
            })
              .then((response) => response.json())
              .then((data) => {
                setReviews(data)
              });
            return () => response;
          } catch (error) {
            console.log(error, error.message);
          }
        });
    } catch (error) {
      console.log(error, error.message);
    }
    }, []);

    async function AddReview(e) {
      e.preventDefault();
      console.log("Działa")

      try {
        const response = await fetch(`${API}/Review/AddReview`, {
          method: "POST",
          headers: {
            Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
            accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            authorId : 0,
            personId : user.id,
            description : description,
            rate : rate,
            createdDate : Date.now(),
          }),
          
        });
      } catch (error) {
        console.error(error.message);
      }
      window.location.reload(false);
    }

  return (
    <div className="bg-white h-screen">
      <Nav></Nav>
      <div className="flex justify-center flex-wrap h-1/6 bg-dark-blue text-light-blue   border-solid border-8 border-white w-full">
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
          ? ann.map((item) => <Ad key={item.id} adData={item} />)
          : null}
      </div>
      <div className="w-full bg-light-blue h-fit text-dark-blue px-6 py-6  border-solid border-8 border-white ">
        <p className="text-3xl mb-2">Recenzje: 
        {token && (<label for="my-modal-3" class="btn bg-dark-blue hover:bg-yellow-600 text-light-blue btn-sm ml-4">Dodaj recenzje</label>)}
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative bg-light-blue">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-2xl font-bold text-dark-blue">Zrecenzuj użytkownika!</h3>
            <div className="">
            <form onSubmit={AddReview}>
              <textarea
                required
                className="w-full h-full text-xl shadow-xl bg-dark-blue text-white rounded-md m-2 p-2"
                placeholder="Napisz recenzje..."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div class="flex flex-col">
                <span class="flex flex-row text-dark-blue justify-center">Oceń:     
                <Stack spacing={1}>
                    <Rating className="ml-10 mt-2" name="half-rating" defaultValue={2.5} precision={0.5} onChange={(e)=>setRate(e.target.value)} />
                  </Stack>
                </span>
                <button class="btn bg-dark-blue hover:bg-green-600 text-light-blue m-6 ">Dodaj recenzje</button>
              </div>
              </form>
            </div>
          </div>
        </div></p>
        <div>
        {reviews
          ? reviews.map((item) => <Review key={item.id} reviewData={item} />)
          : null}
        </div>
      </div>
    </div>
  );
};
export default OtherUserProfile;
