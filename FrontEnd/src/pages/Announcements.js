import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Ad from "../components/Ad";
import Footer from "../components/Footer";
import API from "../env";

const Announcements = () => {
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
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
    return data.filter((item) => {
      console.log(item.user.firstName + item.user.lastName);
      return search.toLowerCase() === '' ? item : (item.user.firstName + ' ' + item.user.lastName).toLowerCase().includes(search)
      
    })
    .map((oneJson) => {
      return <Ad adData={oneJson} />;
    });
  }

  return (
    <div>
      <div class="min-h-screen w-screen">
        <Nav />
        <div class="bg-[#a0bdcf] w-screen">
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
                  <select class="m-6 rounded-full">
                    <option value="" selected disabled hidden>
                      Kategoria
                    </option>
                    <option value="volvo">Ścisłe</option>
                    <option value="saab">Humanistyczne</option>
                  </select>
                  <select class="m-6 rounded-full">
                    <option value="" selected disabled hidden>
                      Przedmiot
                    </option>
                    <option value="volvo">Matematyka</option>
                    <option value="saab">Polski</option>
                    <option value="opel">Biologia</option>
                    <option value="audi">Chemia</option>
                  </select>
                  <select class="m-6 rounded-full">
                    <option value="" selected disabled hidden>
                      Województwo
                    </option>
                    <option value="volvo">Śląsk</option>
                  </select>
                </div>
                <div class="flex flex-col justify-center pb-10">
                  <p class="text-[#06283d] text-center pb-2">
                    Cena(zł) <span id="price">{price}</span>
                  </p>
                  <input
                    type="range"
                    onChange={(e) => setPrice(e.target.value)}
                    min="1"
                    max="1000"
                    id="slider"
                    class="range range-primary bg-[#7c6fde]"
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
