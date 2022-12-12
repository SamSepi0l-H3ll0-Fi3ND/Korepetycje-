import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import API from "../env";
import { useState } from "react";
const AddAnnouncements = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [subject, setSubject] = useState(null);
  const [price, setPrice] = useState(null);
  const [lessonLength, setLessonLength] = useState(30);
  const [Description, setDescription] = useState(null);

  async function AddAnno(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/Announcements`, {
        method: "POST",
        headers: {
          Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
          accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: category,
          description: Description,
          price: price,
          lessonLength: lessonLength,
          subjectId: subject,
        }),
      });
      console.log(response);
      navigate("/announcements");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <form onSubmit={AddAnno}>
      <div className="bg-white h-screen">
        <Nav></Nav>
        <div className="flex justify-center h-2/6 bg-dark-blue text-light-blue text-center border-solid border-8 border-white w-full">
          <div className="self-center">
            <p className="text-4xl">Dodaj swoje nowe ogłoszenie!</p>
            <p>W tym miejscu stworzysz ogłoszenie</p>
          </div>
        </div>
        <div className=" grid justify-items-center  grid-cols-3 gap-4 w-full bg-light-blue h-1/2 text-dark-blue px-6 py-6  border-solid border-8 border-white">
          <div className="justify-items-center w-full space-y-7">
            <p className="text-2xl text-center">Przedmiot:</p>
            <select
              class="rounded-md w-full bg-white h-12 shadow-xl"
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="" selected disabled hidden>
                Przedmiot
              </option>
              <option value="">Wszystkie</option>
              <option value="1">Matematyka</option>
              <option value="4">Polski</option>
              <option value="3">Biologia</option>
              <option value="2">Chemia</option>
              <option value="5">Historia</option>
              <option value="6">WOS</option>
              <option value="7">Angielski</option>
              <option value="8">Niemiecki</option>
              <option value="9">Algebra</option>
            </select>
            <p className="text-2xl text-center">Kategoria:</p>
            <select
              class="rounded-md w-full bg-white h-12 shadow-xl"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" selected disabled hidden>
                Kategoria
              </option>
              <option value="">Wszystkie</option>
              <option value="Ścisłe">Ścisłe</option>
              <option value="Humanistyczne">Humanistyczne</option>
              <option value="Przyrodnicze">Przyrodnicze</option>
              <option value="Obce">Obce</option>
            </select>
          </div>
          <div className="justify-items-center w-full space-y-7">
            <p className="text-2xl text-center">Cena:</p>
            <input
              type="number"
              class="input input-bordered w-full bg-white shadow-xl"
              placeholder="Cena za korepetycje"
              onChange={(e) => setPrice(e.target.value)}
            />
            <p className="text-2xl text-center">Długość lekcji:</p>
            <input
              type="number"
              placeholder="Czas przeznaczony na korepetycje"
              class="input input-bordered w-full bg-white shadow-xl"
              onChange={(e) => setLessonLength(e.target.value)}
            />
          </div>
          <div className="grid place-items-center grid-cols-1">
            <button
              type="submit"
              class="btn btn-success text-dark-blue btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Dodaj ogłoszenie
            </button>
            <Link to="/Announcements">
              <span
                type="submit"
                class="btn btn-outline border-2 border-dark-blue  text-dark-blue btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              >
                Wróc do ogłoszeń
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full bg-light-blue h-1/3 text-dark-blue px-6 py-6  border-solid border-8 border-white ">
          <p className="text-3xl mb-2">Opis:</p>
          <textarea
            className="w-full h-5/6 text-xl shadow-xl"
            placeholder="Tutaj opisz czego teraz potrzebujesz"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default AddAnnouncements;
