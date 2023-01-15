import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import API from "../env";
import { useState } from "react";
const AddAnnouncements = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [price, setPrice] = useState(null);
  const [lessonLength, setLessonLength] = useState(30);
  const [Description, setDescription] = useState(null);
  const [type, setType] = useState(null);
  const allSubjects = {
    "Ścisłe": ["Matematyka", "Algebra"],
    "Przyrodnicze": ["Chemia", "Biologia"],
    "Humanistyczne": ["Polski", "Historia", "WOS"],
    "Obce": ["Angielski", "Niemiecki"]
  }

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
          userId: 0,
          description: Description,
          price: price,
          lessonLength: lessonLength,
          subjectId: 0,
          type: type
        }),
      });
      
      console.log(response);
      navigate("/announcements/all");
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
            <p className="text-2xl text-center">Kategoria:</p>
            <select
              className="rounded-md w-full bg-white h-12 shadow-xl"
              onChange={(e) => {setCategory(e.target.value); setSubject("")}}
            >
              <option value="" disabled hidden>
                Kategoria
              </option>
              <option value="">Wszystkie</option>
              <option value="Ścisłe">Ścisłe</option>
              <option value="Humanistyczne">Humanistyczne</option>
              <option value="Przyrodnicze">Przyrodnicze</option>
              <option value="Obce">Obce</option>
            </select>
            <p className="text-2xl text-center">Przedmiot:</p>
            <select
              className="rounded-md w-full bg-white h-12 shadow-xl"
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="" selected disabled hidden>
                Przedmiot
              </option>
              <option value="">Wszystkie</option>
                {category === "" ? (
                  Object.values(allSubjects).map((tab) => tab.map((item) => <option value={item}>{item}</option>))
                ) : (
                  allSubjects[category].map((item) => <option value={item}>{item}</option>)
                )}
            </select>
            <input 
              type="radio" 
              name="answ"
              value="Uczen"
              onChange={(e) => setType(e.target.value)}
              /> 
            <span className="text-xl"> Szukam korepetycji</span>
          </div>
          <div className="justify-items-center w-full space-y-7">
            <p className="text-2xl text-center">Cena (zł):</p>
            <input
              type="number"
              className="input input-bordered w-full bg-white shadow-xl"
              placeholder="Cena za korepetycje"
              onChange={(e) => setPrice(e.target.value)}
            />
            <p className="text-2xl text-center">Długość lekcji (minuty):</p>
            <input
              type="number"
              placeholder="Czas przeznaczony na korepetycje"
              className="input input-bordered w-full bg-white shadow-xl"
              onChange={(e) => setLessonLength(e.target.value)}
            />
            <input 
              type="radio" 
              name="answ"
              value="Korepetytor"
              onChange={(e) => setType(e.target.value)}
              /> 
              <span className="text-xl"> Udzielam korepetycji</span>
          </div>
          <div className="grid place-items-center grid-cols-1">
            <button
              type="submit"
              className="btn btn-success text-dark-blue btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Dodaj ogłoszenie
            </button>
            <Link to="/announcements/all">
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
