import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import API from "../env";
import { Token } from "@mui/icons-material";
const UserInfo = () => {
  const user = {
    userName: "GigaCHAD",
    firstName: "Jakub",
    lastName: "Michal",
    email: "bartekhasik@gmail.com",
    address: "Witów 112",
  };
  try {
    const response = fetch(`${API}/api/user/`, {
      method: "GET",
      headers: {
        Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    });
    const resp = response.json;
    console.log(resp);
  } catch (error) {
    console.log(error, error.message);
  }
  return (
    <div className="Background__userinfo">
      <Nav></Nav>
      <div className="grid h-screen justify-center place-items-center ">
        <>
          <div class="card w-full bg-dark-blue rounded-none shadow-xl">
            <div className="flex justify-between">
              <div className="text-start">
                <Logo></Logo>
              </div>
              <div className="text-end pt-4 pr-6 ">
                <Link to="/useredit">
                  <SettingsIcon className="fill-white"></SettingsIcon>
                </Link>
              </div>
            </div>
            <div class="flex flex-col  space-y-4 card-body">
              <h2 class="text-white text-center text-3xl underline underline-offset-8">
                Cześć {user.userName}!
              </h2>

              <div className=" text-center">Informacje o Tobie:</div>
              <div className=" text-center text-white">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique, explicabo.
              </div>
              <div>
                <hr />
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="flex flex-col space-y-2">
                  <p>Twoje imie</p>
                  <p className="text-white text-2xl"> {user.firstName} </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p>Twoje nazwisko</p>
                  <p className="text-white text-2xl"> {user.lastName} </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p>Twoj nick</p>
                  <p className="text-white text-2xl"> {user.userName} </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p>Twoj address</p>
                  <p className="text-white text-2xl"> {user.address} </p>
                </div>
                <div className="col-span-2 flex flex-col space-y-2">
                  <p>Twoj address</p>
                  <p className="text-white text-2xl"> {user.email} </p>
                </div>
              </div>
              <div class="card-actions justify-end">
                <Link to="/">
                  <button class="btn btn-outline text-white border-2">
                    Dashboard
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default UserInfo;
