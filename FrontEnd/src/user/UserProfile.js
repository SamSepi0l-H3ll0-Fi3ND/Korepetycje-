import Nav from "../components/Nav";
import Review from "../components/Review";

const UserProfile = () => {
  const User = {
    FirstName: " Łukasz",
    LastName: " Nowak",
    Email: " lukasznowak@gmial.com",
    Address: "Witów 102",
    Rate: "10/10",
    Description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus maxime aliquid atque minus sequi soluta reiciendis optio enim ipsa aspernatur!",
    phoneNumber: "572363275",
  };
  return (
    <div className="bg-white h-screen">
      <Nav></Nav>
      <div className="h-screen">
        <div className="flex flex-wrap h-1/6 bg-dark-blue text-light-blue justify-center border-solid border-8 border-white w-full">
          <div className="text-4xl text-white mt-4 ustify-items-center ">
            Witaj na profilu użytkownika {User.FirstName} {User.LastName} !
          </div>
          <div></div>
        </div>
        <div className="flex flex-wrap h-1/6 bg-dark-blue text-light-blue justify-center border-solid border-8 border-white w-full">
          <div className="grid grid-cols-6 gap-12 mt-8 text-center">
            <div className="flex flex-col space-y-2 ">
              <p>Imię </p>
              <p className="text-white text-2xl"> {User.FirstName} </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p> Nazwisko</p>
              <p className="text-white text-2xl"> {User.LastName} </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Adres</p>
              <p className="text-white text-2xl"> {User.Address} </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Ocena </p>
              <p className="text-white text-2xl"> {User.Rate} </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Email</p>
              <p className="text-white text-2xl"> {User.Email} </p>
            </div>

            <div className="flex flex-col space-y-2">
              <p>Numer telefonu</p>
              <p className="text-white text-2xl"> {User.phoneNumber} </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-light-blue h-1/3 text-dark-blue px-6 py-6  border-solid border-8 border-white ">
          <p className="text-3xl mb-2">Opis:</p>
          <p className="text-xl">{User.Description}</p>
        </div>
        <div className="w-full bg-light-blue h-1/3 text-dark-blue px-6 py-6  border-solid border-8 border-white ">
          <p className="text-3xl mb-2">Ogłoszenia:</p>
        </div>
        <div className="w-full bg-light-blue h-fit text-dark-blue px-6 py-6  border-solid border-8 border-white ">
          <p className="text-3xl mb-2">Recenzje:</p>
          <div>
            <Review></Review>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
