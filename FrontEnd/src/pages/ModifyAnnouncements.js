import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import API from "../env";

const ModifyAnnouncements = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [ann, setAnnouncements] = useState({
    Id: state.id,
    Description: state.description,
    Price: state.price,
    LessonLength: state.lessonLength,
  });
  const onChange = (e) => {
    setAnnouncements((ann) => ({ ...ann, [e.target.name]: e.target.value }));
  };
  const modify = async (e) => {
    e.preventDefault();
    await fetch(`${API}/Announcements`, {
      method: "PUT",
      body: JSON.stringify(ann),
      headers: {
        Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
        "Content-Type": "application/json",
      },
    });
    navigate("/userinfo");
  };

  return (
    <div className="bg-white h-screen">
      <Nav></Nav>
      <form onSubmit={modify}>
        <div className="flex justify-center h-2/6 bg-dark-blue text-light-blue text-center border-solid border-8 border-white w-full">
          <div className="self-center">
            <p className="text-4xl">Zmodyfikuj swoje ogłoszenie!</p>
            <p>W tym miejscu zmodyfikujesz swoje ogłoszenie!</p>
          </div>
        </div>
        <div className=" grid justify-items-center  grid-cols-1 gap-4 w-full bg-light-blue h-fit text-dark-blue px-6 py-6  border-solid border-8 border-white">
          <div className="justify-items-center w-full space-y-7"></div>
          <div className="justify-items-center w-full space-y-7">
            <p className="text-2xl text-center">Cena (zł):</p>
            <input
              type="number"
              min={0}
              max={1000}
              className="input input-bordered w-full bg-white shadow-xl"
              placeholder="Cena za korepetycje"
              onChange={onChange}
              name="Price"
              value={ann.Price}
            />
            <p className="text-2xl text-center">Długość lekcji (minuty):</p>
            <input
              min={1}
              max={200}
              type="number"
              placeholder="Czas przeznaczony na korepetycje"
              className="input input-bordered w-full bg-white shadow-xl"
              onChange={onChange}
              name="LessonLength"
              value={ann.LessonLength}
            />
          </div>
          <div className="grid place-items-center grid-cols-2">
            <button
              type="submit"
              className="btn btn-success text-dark-blue btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Zapisz ogłoszenie
            </button>
            <Link to="/userinfo">
            <span
              type="submit"
              className="btn btn-outline border-2 border-dark-blue  text-dark-blue btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Wróc do ogłoszeń
            </span>
            </Link>
          </div>
        </div>
        <div className="w-full bg-light-blue h-1/3 text-dark-blue px-6 py-6  border-solid border-8 border-white ">
          <p className="text-3xl mb-2">Opis:</p>
          <textarea
            required
            name="Description"
            defaultValue={ann.Description}
            onChange={onChange}
            className="w-full h-5/6 text-xl shadow-xl"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ModifyAnnouncements;
