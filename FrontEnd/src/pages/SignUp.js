import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { useState } from "react";
import API from "../env";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  var [response, setResponse] = useState();
  var [response2, setResponse2] = useState();
  var [checked, setChecked] = useState();
  var [afterSubmit, setAfterSubmit] = useState();

  //let isChecked;

  // const checkbox = (e, isChecked) => {
  //   const checked = e.target.checked;
  //   if (checked) {
  //    isChecked = true;
  //    console.log(isChecked);
  //   } else {
  //     isChecked = false;
  //     console.log(isChecked);
  //   }
  // };

  async function registerSubmit(e) {
    const formdata = new FormData(e.target);
    var jsonObject = {};
    formdata.forEach((value, key) => (jsonObject[key] = value));
    setAfterSubmit(true);
    e.preventDefault();
    console.log("po submicie: ", checked);
    console.log("po submicie2: ", afterSubmit);

    try {
      if (!checked) {
        console.log("Akceptuj szmato!");
      } else {
        if (formdata.get("password") === formdata.get("confirmPassword")) {
          const response = await fetch(`${API}/Authentication/register`, {
            method: "POST",
            headers: {
              accept: "text/plain",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonObject),
          });

          const data = await response.json();
          if (response.status === 200) {
            navigate("/signin");
          }
          setResponse(data);
          setResponse2(false);
        } else {
          setResponse2(true);
        }
      }
    } catch (error) {
      console.log(error, error.message);
    }
  }

  return (
    <form onSubmit={registerSubmit}>
      <div>
        <div className="min-h-screen">
          <div className="flex justify-center mb-20">
            <div className="grid sm:rounded-md bg-[#d6f4fe] flex justify-center sm:mt-20 mt-4 w-screen sm:w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
              <div className="pt-6 px-10 text-center mr-4">
                <p className="text-4xl text-center text-dark-blue font-bold pt-6 sm:px-20 pb-14">
                  Rejestracja
                </p>
              </div>
              <div className="sm:ml-10">
                <p className="ml-10 sm:ml-16 text-dark-blue font-bold">
                  <AccountCircleIcon /> Nazwa Użytkownika
                </p>
              </div>
              <div className="flex flex-nowrap mb-2">
                <div className="justify-center w-6 sm:w-10 sm:ml-12"/>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-s mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div className="sm:ml-10">
                <p className="ml-10 sm:ml-16 text-dark-blue font-bold">Imie</p>
              </div>
              <div className="flex flex-nowrap mb-2">
              <div className="justify-center w-6 sm:w-10 sm:ml-12"/>
                <input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  className="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div className="sm:ml-10">
                <p className="ml-10 sm:ml-16 text-dark-blue font-bold">Nazwisko</p>
              </div>
              <div className="flex flex-nowrap mb-2">
              <div className="justify-center w-6 sm:w-10 sm:ml-12"/>
                <input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  className="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div className="sm:ml-10">
                <p className="ml-10 sm:ml-16 text-dark-blue font-bold"><HomeIcon/> Adres</p>
              </div>
              <div className="flex flex-nowrap mb-2">
              <div className="justify-center w-6 sm:w-10 sm:ml-12"/>
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div className="sm:ml-10">
                <p className="ml-10 sm:ml-16 text-dark-blue font-bold">
                <AlternateEmailIcon/> Adres e-mail
                </p>
              </div>
              <div className="flex flex-nowrap mb-2">
              <div className="justify-center w-6 sm:w-10 sm:ml-12"/>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div className="sm:ml-10">
                <p className="ml-10 sm:ml-16 text-dark-blue font-bold"><VpnKeyIcon/> Hasło</p>
              </div>
              <div className="flex flex-nowrap mb-2">
              <div className="justify-center w-6 sm:w-10 sm:ml-12"/>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div className="sm:ml-10">
                <p className="ml-10 sm:ml-16 text-dark-blue font-bold">
                  Potwierdź hasło
                </p>
              </div>
              <div className="flex flex-nowrap mb-2">
              <div className="justify-center w-6 sm:w-10 sm:ml-12"/>
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  className="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div className="flex justify-center">
                <input
                  name="regulamin"
                  type="checkbox"
                  className="sm:mt-10 mt-2 checked:bg-[#06283d] required:border-red-500"
                  onClick={(e) => setChecked(e.target.checked)}
                />{" "}
                <p className="sm:mt-10 mt-2 ml-6 text-dark-blue">
                  Akceptuje{" "}
                  <Link to="/termsofuse" className="underline underline-offset-2">
                    regulamin*
                  </Link>
                </p>
              </div>
              <div className="flex justify-center mb-8">
                <button className="btn bg-[#06283d] text-[#dff6ff] justify-center mt-8 my-2 w-48 shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
                  Zarejestruj się
                </button>
              </div>
              {response && <Info responseData={response}></Info>}
              {response2 && (
                <div>
                  <p className="flex flex-col text-xl text-center text-[#FF0000]">
                    Hasła nie są identyczne
                  </p>
                </div>
              )}
              {!checked && afterSubmit && (
                <div>
                  <p className="flex flex-col text-xl m-4 text-center text-[#FF0000]">
                    Musisz zaakceptować regulamin!
                  </p>
                </div>
              )}
              <Link to="../signin">
                <p className="text-dark-blue text-center mb-8">
                  Jeśli masz już konto, zaloguj się!
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </form>
  );
};

export default SignUp;
