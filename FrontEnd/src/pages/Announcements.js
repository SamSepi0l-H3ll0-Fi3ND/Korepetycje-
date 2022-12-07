import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Ad from "../components/Ad";
import Footer from "../components/Footer";
import API from "../env";

const Announcements = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [price, setfromPrice] = useState(50);
  const [price2, settoPrice] = useState(50);
  const [data, setData] = useState([]);

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

      var lowerSlider = document.querySelector('#lower');
      var upperSlider = document.querySelector('#upper');
      var lowerVal = parseInt(lowerSlider.value);
      var upperVal = parseInt(upperSlider.value);

      lowerSlider.oninput = function() {     
        if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;
        }
      };

      upperSlider.oninput = function() {
        if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;
        }
      };

      return price <= item.price && price2 >= item.price ? item : false
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
                  <select class="m-6 rounded-full" onChange={(e) => setCategory(e.target.value)}>
                    <option value="" selected disabled hidden>
                      Kategoria
                    </option>
                    <option value="">Wszystkie</option>
                    <option value="Ścisłe">Ścisłe</option>
                    <option value="Humanistyczne">Humanistyczne</option>
                    <option value="Przyrodnicze">Przyrodnicze</option>
                    <option value="Obce">Obce</option>
                  </select>
                  <select class="m-6 rounded-full" onChange={(e) => setSubject(e.target.value)}>
                    <option value="" selected disabled hidden>
                      Przedmiot
                    </option>
                    <option value="">Wszystkie</option>
                    <option value="Matematyka">Matematyka</option>
                    <option value="Polski">Polski</option>
                    <option value="Biologia">Biologia</option>
                    <option value="Chemia">Chemia</option>
                    <option value="Historia">Historia</option>
                    <option value="WOS">WOS</option>
                    <option value="Angielski">Angielski</option>
                    <option value="Niemiecki">Niemiecki</option>
                    <option value="Algebra">Algebra</option>
                  </select>
                  <select class="m-6 rounded-full">
                    <option value="" selected disabled hidden>
                      Województwo
                    </option>
                    <option value="Śląsk">Śląsk</option>
                  </select>
                </div>
                <div class="flex flex-col justify-center pb-10">
                  <p class="text-[#06283d] text-center pb-14">
                    Cena od <span id="price">{price}zł do {price2}zł</span>
                  </p>
                  <input
                    type="range"
                    onChange={(e) => setfromPrice(e.target.value)}
                    min="0"
                    max="100"
                    id="lower"
                  ></input>
                  <input
                    type="range"
                    onChange={(e) => settoPrice(e.target.value)}
                    min="0"
                    max="100"
                    id="upper"
                  ></input>
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
