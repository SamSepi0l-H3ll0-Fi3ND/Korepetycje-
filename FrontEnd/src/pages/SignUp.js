import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { useState, useRef } from "react";
import API from "../env";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  var [response, setResponse] = useState();
  var [response2, setResponse2] = useState();
  var [checked, setChecked] = useState();
  var [afterSubmit, setAfterSubmit] = useState();
  const selectRef = useRef("");

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
        <div class="sm:h-fit">
          <div class="flex justify-center mb-20">
            <div class="grid sm:rounded-md bg-[#d6f4fe]  sm:mt-20 w-screen sm:w-auto sm:h-auto shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
              <div class="pt-6 px-10 text-center mr-4">
                <p class="text-4xl text-center text-dark-blue font-bold pt-2 sm:px-20 sm:pb-14 pb-8">
                  Rejestracja
                </p>
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">
                  Nazwa Użytkownika
                </p>
              </div>
              <div class="flex flex-nowrap">
                <AccountCircleIcon class="justify-center w-12 sm:w-16 sm:ml-12"></AccountCircleIcon>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-s mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Imie</p>
              </div>
              <div class="flex sm:ml-12">
                <input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-16 sm:ml-20 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Nazwisko</p>
              </div>
              <div class="flex sm:ml-12">
                <input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-16 sm:ml-20 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Adres</p>
              </div>
              <div class="flex">
                <HomeIcon class="justify-center w-12 sm:w-16 sm:ml-12"></HomeIcon>
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">
                  Adres e-mail
                </p>
              </div>
              <div class="flex">
                <AlternateEmailIcon class="justify-center w-12 sm:w-16 sm:ml-12"></AlternateEmailIcon>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Hasło</p>
              </div>
              <div class="flex">
                <VpnKeyIcon class="justify-center w-12 sm:w-16 sm:ml-12"></VpnKeyIcon>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">
                  Potwierdź hasło
                </p>
              </div>
              <div class="flex sm:ml-12">
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-16 sm:ml-20 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div class="flex ml-4">
                <input
                  name="regulamin"
                  type="checkbox"
                  class="sm:mt-10 mt-2 sm:ml-12 ml-4 checked:bg-[#06283d] required:border-red-500"
                  onClick={(e) => setChecked(e.target.checked)}
                />{" "}
                <p class="sm:mt-10 mt-2 sm:ml-12 ml-6 text-dark-blue">
                  Akceptuje{" "}
                  <Link to="/termsofuse" class="underline underline-offset-2">
                    regulamin*
                  </Link>
                </p>
              </div>
              <div class="flex justify-center h-1/3">
                <button class="btn bg-[#06283d] text-[#dff6ff] justify-center sm:mt-8 my-2 ml-4 w-48 shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
                  Zarejestruj się
                </button>
              </div>
              {response && <Info responseData={response}></Info>}
              {response2 && (
                <div>
                  <p class="flex flex-col text-xl text-center text-[#FF0000]">
                    Hasła nie są identyczne
                  </p>
                </div>
              )}
              {!checked && afterSubmit && (
                <div>
                  <p class="flex flex-col text-xl m-4 text-center text-[#FF0000]">
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
