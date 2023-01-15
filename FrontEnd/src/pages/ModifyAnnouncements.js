import Nav from "../components/Nav";

const ModifyAnnouncements = () => {
  return (
    <div className="bg-white h-screen">
      <Nav></Nav>
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
            className="input input-bordered w-full bg-white shadow-xl"
            placeholder="Cena za korepetycje"
          />
          <p className="text-2xl text-center">Długość lekcji (minuty):</p>
          <input
            min={1}
            type="number"
            placeholder="Czas przeznaczony na korepetycje"
            className="input input-bordered w-full bg-white shadow-xl"
          />
        </div>
        <div className="grid place-items-center grid-cols-2">
          <button
            type="submit"
            className="btn btn-success text-dark-blue btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Zapisz ogłoszenie
          </button>

          <span
            type="submit"
            className="btn btn-outline border-2 border-dark-blue  text-dark-blue btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Wróc do ogłoszeń
          </span>
        </div>
      </div>
      <div className="w-full bg-light-blue h-1/3 text-dark-blue px-6 py-6  border-solid border-8 border-white ">
        <p className="text-3xl mb-2">Opis:</p>
        <textarea
          className="w-full h-5/6 text-xl shadow-xl"
          placeholder="Tutaj opisz czego teraz potrzebujesz"
        ></textarea>
      </div>
    </div>
  );
};

export default ModifyAnnouncements;
