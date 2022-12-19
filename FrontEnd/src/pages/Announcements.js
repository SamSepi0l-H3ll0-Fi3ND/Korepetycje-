import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Ad from "../components/Ad";
import Footer from "../components/Footer";
import API from "../env";
import Slider from '@mui/material/Slider';

const Announcements = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const allSubjects = {
    "Ścisłe": ["Matematyka", "Algebra"],
    "Przyrodnicze": ["Chemia", "Biologia"],
    "Humanistyczne": ["Polski", "Historia", "WOS"],
    "Obce": ["Angielski", "Niemiecki"]
  }

  useEffect(() => {
    try {
      const response = fetch(`${API}/Announcements`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  function valuetext(value) {
    return `${value}zł`;
  }

  const minDistance = 1;
  const [value1, setValue1] = useState([20, 60]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  function generateAds() {
    return data
      .filter((item) => {
        return search.toLowerCase() === '' ? item : (item.user.firstName + ' ' + item.user.lastName).toLowerCase().includes(search.toLowerCase());
      })
      .filter((item) => {
        return category === '' ? item : item.subject.category === category;
      })
      .filter((item) => {
        return subject === '' ? item : item.subject.name === subject;
      })
      .filter((item) => {
        return type === '' ? item : item.type === type;
      })
      .filter((item) => {
        return value1[0] <= item.price && value1[1] >= item.price ? item : false
      })
      .map((oneJson) => {
        return <Ad adData={oneJson} />;
      });
  }

  return (
    <div>
      <div class="min-h-screen w-full">
        <Nav />
        <div class="bg-[#a0bdcf] w-full">
          <div>
            <p class="text-3xl text-[#06283d] flex justify-center pt-16">
              Przeglądaj korepetytorów...
            </p>
            <div className="flex justify-center mt-8 mb-6">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Szukaj korepetycji"
                class="input input-bordered border-neutral-700 bg-[#faf9fa] w-4/5 max-w-3xl rounded-none rounded-l-3xl text-[#06283d]"
              />
              <button class="btn bg-dark-blue text-[#dff6ff] rounded-none rounded-r-3xl w-1/3 sm:w-1/6 lg:w-1/12">
                Szukaj
              </button>
            </div>
            <div class="flex justify-center">
              <div class="max-w-xl">
                <div class="pb-6">
                  <select class="m-3 rounded-full" onChange={(e) => {setCategory(e.target.value); setSubject("")}}>
                    <option value="" selected disabled hidden>
                      Kategoria
                    </option>
                    <option value="">Wszystkie</option>
                    <option value="Ścisłe">Ścisłe</option>
                    <option value="Humanistyczne">Humanistyczne</option>
                    <option value="Przyrodnicze">Przyrodnicze</option>
                    <option value="Obce">Obce</option>
                  </select>
                  <select class="m-3 rounded-full" onChange={(e) => setSubject(e.target.value)}>
                    <option value="" selected disabled hidden>
                      Przedmiot
                    </option>
                    <option value="">Wszystkie</option>
                    {category == "" ? (
                      Object.values(allSubjects).map((tab) => tab.map((item) => <option value={item}>{item}</option>))
                    ) : (
                      allSubjects[category].map((item) => <option value={item}>{item}</option>)
                    )}
                  </select>
                  <select class="m-3 rounded-full">
                    <option value="" selected disabled hidden>
                      Województwo
                    </option>
                    <option value="Śląsk">Śląsk</option>
                  </select>
                  <select class="m-3 rounded-full" onChange={(e) => setType(e.target.value)}>
                    <option value="" selected disabled hidden>
                      Typ
                    </option>
                    <option value="">Wszystkie</option>
                    <option value="Uczen">Uczeń</option>
                    <option value="Korepetytor">Korepetytor</option>
                  </select>
                </div>
                <div class="flex flex-col justify-center pb-10">
                  <p class="text-[#06283d] text-center">
                    Cena od <span id="price">{value1[0]} zł do {value1[1]} zł</span>
                  </p>
                  <Slider
                    getAriaLabel={() => 'Minimum distance shift'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={500}
                    disableSwap
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center m-10">{generateAds()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Announcements;
