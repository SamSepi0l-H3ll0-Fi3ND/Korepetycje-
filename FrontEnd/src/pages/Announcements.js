import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Ad from "../components/Ad";
import Footer from "../components/Footer";
import API from "../env";
import Slider from '@mui/material/Slider';
import CircularProgress from '@mui/material/CircularProgress';

const Announcements = () => {
  let { inSubject } = useParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState(inSubject);
  const [type, setType] = useState("");
  const [data, setData] = useState();
  const [minValue, setMinValue] = useState(0.0);
  const [maxValue, setMaxValue] = useState(0.0);
  const [subjects, setSubjects] = useState(null);


  var allSubjects = {
    "Ścisłe": [],
    "Przyrodnicze": [],
    "Humanistyczne": [],
    "Obce": []
  }

  useEffect(() => {
    try {
      fetch(`${API}/Announcements`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((announcements) => {
          setData(announcements)
          var max = 0.0
          announcements.forEach(element => {
            if (element.price > max) {
              max = element.price
            }
          });
          setMaxValue(max)
        });
    } catch (error) {
      console.error(error);
    }

    try {
      const response = fetch(`${API}/Subject`, {
        method: "GET"
      })
        .then((response) => response.json())
        .then((data) => {

            data.forEach(element => {
              if (element.category === "Ścisłe") {
                allSubjects.Ścisłe.push(element.name)
                console.log(element.name)
              }
              if (element.category === "Przyrodnicze") {
                allSubjects.Przyrodnicze.push(element.name)
              }
              if (element.category === "Humanistyczne") {
                allSubjects.Humanistyczne.push(element.name)
              }              
              if (element.category === "Obce") {
                allSubjects.Obce.push(element.name)
              }
            })
        });
        console.log(allSubjects)

    } catch (error) {
      console.error(error.message);
    }
  }, []);

  function valuetext(value) {
    return `${value}zł`;
  }

  const minDistance = 1;
  const [value1, setValue1] = useState([0, maxValue]);

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
        return subject === 'all' ? item : item.subject.name === subject;
      })
      .filter((item) => {
        return type === '' ? item : item.type === type;
      })
      .filter((item) => {
        return value1[0] <= item.price && value1[1] >= item.price ? item : false
      })
      .map((oneJson) => {
        return <Ad key={oneJson.id} adData={oneJson} />;
      });
  }

  return (
    <div>
      <div className="min-h-screen w-full">
        <Nav />
        <div className="bg-[#a0bdcf] w-full">
          <div>
            <p className="text-3xl text-[#06283d] flex justify-center pt-16">
              Przeglądaj korepetytorów...
            </p>
            <div className="flex justify-center mt-8 mb-6">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Szukaj korepetycji"
                className="input input-bordered border-neutral-700 bg-[#faf9fa] w-4/5 max-w-3xl rounded-none rounded-l-3xl text-[#06283d]"
              />
              <button className="btn bg-dark-blue text-[#dff6ff] rounded-none rounded-r-3xl w-1/3 sm:w-1/6 lg:w-1/12">
                Szukaj
              </button>
            </div>
            <div className="flex justify-center">
              <div className="max-w-xl">
                <div className="pb-6">
                  <select className="m-3 rounded-full" onChange={(e) => { setCategory(e.target.value); setSubject("") }} defaultValue="">
                    <option value="" disabled hidden>
                      Kategoria
                    </option>
                    <option value="">Wszystkie</option>
                    <option value="Ścisłe">Ścisłe</option>
                    <option value="Humanistyczne">Humanistyczne</option>
                    <option value="Przyrodnicze">Przyrodnicze</option>
                    <option value="Obce">Obce</option>
                  </select>
                  <select className="m-3 rounded-full" onChange={(e) => setSubject(e.target.value)} defaultValue={subject === "" ? inSubject : subject}>
                    <option value="" disabled hidden>
                      Przedmiot
                    </option>
                    <option value="all">Wszystkie</option>
                    {category === "" ? (
                      Object.values(allSubjects).map((tab) => tab.map((item) => <option key={item} value={item}>{item}</option>
                      ))
                    ) : (
                      allSubjects[category].map((item) => <option key={item} value={item}>{item}</option>)
                    )}
                  </select>

                  <select className="m-3 rounded-full" onChange={(e) => setType(e.target.value)} defaultValue="">
                    <option value="" disabled hidden>
                      Typ
                    </option>
                    <option value="">Wszystkie</option>
                    <option value="Uczen">Uczeń</option>
                    <option value="Korepetytor">Korepetytor</option>
                  </select>
                </div>
                <div className="flex flex-col justify-center pb-10">
                  <p className="text-[#06283d] text-center">
                    Cena od <span id="price">{value1[0]} zł do {value1[1]} zł</span>
                  </p>
                  <Slider
                    getAriaLabel={() => 'Minimum distance shift'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={maxValue}
                    disableSwap
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          data ?
            <div className="flex flex-col justify-center m-10">{generateAds()}</div>
            :
            <div className="flex p-10 justify-center">
              <CircularProgress />
            </div>
        }
      </div>
      <Footer />
    </div>
  );
};

export default Announcements;
