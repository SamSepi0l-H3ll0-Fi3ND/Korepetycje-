import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { useState, useRef} from "react";
import API from "../env";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState(null);
  const [Password, setPassword] = useState(null);
  const [FirstName, setFirstname] = useState(null);
  const [Lastname, setLastname] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Address, setAddress] = useState(null);
  const [type, setType] = useState(2);
  var [response, setResponse] = useState();

  const selectRef = useRef("");
  var res;


  async function registerSubmit(e) {
    e.preventDefault();
    try {
      response = await fetch(`${API}/Authentication/register`, {
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
      })
      .then((response) => {
        setResponse(response);
        if(response.status === 200) {
          navigate("/signin");
        }else{
          
        }
      })
      res = await response.text();
      setResponse(res);
      console.log(res)
    } catch (error) {
      console.log(error, error.message);
    }
    
  }

  return (
    <form onSubmit={registerSubmit}>
      <div>
        <div class="sm:h-fit">
          <div class="flex justify-center mb-20">
            <div class="grid sm:rounded-md bg-[#d6f4fe] flex justify-center sm:mt-20 w-screen sm:w-auto sm:h-auto shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
              <div class="pt-6 px-10 text-center mr-4">
                <p class="text-4xl text-center text-dark-blue font-bold pt-2 sm:px-20 sm:pb-14 pb-8">
                  Rejestracja
                </p>
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Nazwa Użytkownika</p>
              </div>
              <div class="flex">
                <AccountCircleIcon class="justify-center w-12 sm:w-16 sm:ml-12"></AccountCircleIcon>
                <input
                  type="text"
                  placeholder="Username"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-s mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Imie</p>
              </div>
              <div class="flex sm:ml-12">
                <input
                  type="text"
                  placeholder="Firstname"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-16 sm:ml-20 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Nazwisko</p>
              </div>
              <div class="flex sm:ml-12">
                <input
                  type="text"
                  placeholder="Lastname"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-16 sm:ml-20 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Adres</p>
              </div>
              <div class="flex">
                <HomeIcon class="justify-center w-12 sm:w-16 sm:ml-12"></HomeIcon>
                <input
                  type="text"
                  placeholder="Address"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Adres e-mail</p>
              </div>
              <div class="flex">
                <AlternateEmailIcon class="justify-center w-12 sm:w-16 sm:ml-12"></AlternateEmailIcon>
                <input
                  type="text"
                  placeholder="Email"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Hasło</p>
              </div>
              <div class="flex">
                <VpnKeyIcon class="justify-center w-12 sm:w-16 sm:ml-12"></VpnKeyIcon>
                <input
                  type="password"
                  placeholder="Password"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="sm:ml-12">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Potwierdź hasło</p>
              </div>
              <div class="flex sm:ml-12">
                <input
                  type="password"
                  placeholder="Confirm password"
                  class="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-16 sm:ml-20 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
              </div>
              <div class="sm:ml-12 mt-2">
                <p class="ml-16 sm:ml-20 text-dark-blue font-bold">Typ konta:</p>
              </div>
              <div class="flex sm:ml-12">
                <select
                  class="ml-16 sm:ml-20 my-2 rounded-md shadow-[0_0_16px_0_rgba(0,0,0,0.7)]"
                  ref={selectRef}
                  onChange={() => setType(selectRef.current.value)}
                >
                  <option value="" selected disabled hidden>Select account type</option>
                  <option value="1" class="text-dark-blue">
                    Korepetytor
                  </option>
                  <option value="2" class="text-dark-blue">Uczeń</option>
                </select>
              </div>
              <div class="flex ml-4">
                <input
                  type="checkbox"
                  class="sm:mt-10 mt-2 sm:ml-12 ml-4 checked:bg-[#06283d] required:border-red-500"
                />{" "}
                <p class="sm:mt-10 mt-2 sm:ml-12 ml-6 text-dark-blue">Akceptuje <a class="underline underline-offset-2">regulamin*</a></p>
              </div>
              <div class="flex justify-center">
                <button class="btn bg-[#06283d] text-[#dff6ff] justify-center sm:my-14 my-2 ml-4 w-48 shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
                  Zarejestruj się
                </button>
              </div>
              {response && (<Info responseData = {response}></Info>)}
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
