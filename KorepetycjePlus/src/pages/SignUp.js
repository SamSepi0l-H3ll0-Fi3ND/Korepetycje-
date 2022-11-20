import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import API from "../env";

const SignUp = () => {
  const [Username, setUsername] = useState(null);
  const [Password, setPassword] = useState(null);
  const [FirstName, setFirstname] = useState(null);
  const [Lastname, setLastname] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Address, setAddress] = useState(null);
  const [type, setType] = useState(2);

  const selectRef = useRef("");

  async function registerSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/Authentication/register`, {
        method: "POST",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: Username,
          password: Password,
          firstName: FirstName,
          lastName: Lastname,
          email: Email,
          address: Address,
          type: type,
        }),
      });
    } catch (error) {
      console.log(error, error.message);
    }
  }
  return (
    <form onSubmit={registerSubmit}>
      <div>
        <div class="flex h-screen justify-center">
          <div class="grid rounded-md bg-[#d6f4fe] flex justify-center m-8 w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
            <div class="pt-6 px-10 text-center mr-4">
              <p class="text-4xl text-center text-dark-blue font-bold pt-6 px-20 pb-14">
                Rejestracja
              </p>
            </div>
            <div class="ml-14">
              <p class="ml-20 text-dark-blue font-bold">Nazwa Użytkownika</p>
            </div>
            <div class="flex">
              <AccountCircleIcon class="justify-center w-16 ml-12"></AccountCircleIcon>
              <input
                type="text"
                placeholder="Username"
                class="input input-bordered border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="ml-14">
              <p class="ml-20 text-dark-blue font-bold">Imie</p>
            </div>
            <div class="flex">
              <AlternateEmailIcon class="justify-center w-16 ml-12"></AlternateEmailIcon>
              <input
                type="text"
                placeholder="Firstname"
                class="input input-bordered border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div class="ml-14">
              <p class="ml-20 text-dark-blue font-bold">Nazwisko</p>
            </div>
            <div class="flex">
              <AlternateEmailIcon class="justify-center w-16 ml-12"></AlternateEmailIcon>
              <input
                type="text"
                placeholder="Lastname"
                class="input input-bordered border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div class="ml-14">
              <p class="ml-20 text-dark-blue font-bold">Adres</p>
            </div>
            <div class="flex">
              <AlternateEmailIcon class="justify-center w-16 ml-12"></AlternateEmailIcon>
              <input
                type="text"
                placeholder="Address"
                class="input input-bordered border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div class="ml-14">
              <p class="ml-20 text-dark-blue font-bold">Adres e-mail</p>
            </div>
            <div class="flex">
              <AlternateEmailIcon class="justify-center w-16 ml-12"></AlternateEmailIcon>
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="ml-14">
              <p class="ml-20 text-dark-blue font-bold">Typ konta:</p>
            </div>
            <div class="flex">
              <select
                class="m-6 rounded-full"
                ref={selectRef}
                onChange={() => setType(selectRef.current.value)}
              >
                <option default value="2">
                  Korepetytor
                </option>
                <option value="3">Uczeń</option>
              </select>
            </div>
            <div class="ml-14">
              <p class="ml-20 text-dark-blue font-bold">Hasło</p>
            </div>
            <div class="flex">
              <VpnKeyIcon class="justify-center w-16 ml-12"></VpnKeyIcon>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="ml-14">
              <p class="ml-20 text-dark-blue font-bold">Potwierdź hasło</p>
            </div>
            <div class="flex ml-20">
              <input
                type="password"
                placeholder="Confirm password"
                class="input input-bordered border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-12 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
              />
            </div>
            <div class="flex ml-20">
              <input
                type="checkbox"
                class="mt-10 checked:bg-[#06283d] required:border-red-500"
              />{" "}
              <p class="mt-10 ml-10 text-dark-blue">Akceptuje regulamin*</p>
            </div>
            <div class="flex justify-center mb-16">
              <Link to="/singin">
                <button class="btn bg-[#06283d] text-[#dff6ff] justify-center my-14 ml-6 w-48 shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
                  Zarejestruj się
                </button>
              </Link>
            </div>
            <Link to="../signin">
              <p className="text-dark-blue text-center mb-8">
                Jeśli masz już konto, zaloguj się!
              </p>
            </Link>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </form>
  );
};

export default SignUp;
