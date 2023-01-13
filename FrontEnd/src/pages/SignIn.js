import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Footer from "../components/Footer";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../env";
import { useNavigate } from "react-router-dom";
import Info from "../components/Info";

const SignIn = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  var [response, setResponse] = useState();

  async function loginSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/Authentication/login`, {
        method: "POST",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: Username,
          password: password,
        }),
      });
      const data = await response.json();
      setResponse(data);
      if (!response.ok) throw new Error(response.status);
      else {
        const token = await response.text();
        localStorage.setItem("Tajny numerek", token);
        navigate("/");
      }
    } catch (error) {
      console.log(error, error.message);
    }
  }

  return (
    <form onSubmit={loginSubmit}>
      <div>
        <div className="min-h-screen">
          <div className="flex justify-center mb-20">
            <div className="grid sm:rounded-md bg-[#d6f4fe] flex justify-center sm:mt-20 mt-4 w-screen sm:w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
              <div className="pt-6 px-10 text-center mr-4">
                <p className="text-4xl text-center text-dark-blue font-bold pt-6 sm:px-20 pb-14">
                  Logowanie
                </p>
              </div>
              <div className="sm:ml-12">
                <p className="ml-16 sm:ml-20 text-dark-blue font-bold">
                  Nazwa Użytkownika
                </p>
              </div>
              <div className="flex">
                <AccountCircleIcon className="justify-center w-12 sm:w-16 sm:ml-12"></AccountCircleIcon>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-s mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="ml-14">
                <p className="ml-16 sm:ml-20 text-dark-blue font-bold">Hasło</p>
              </div>
              <div className="flex">
                <VpnKeyIcon className="justify-center w-12 sm:w-16 sm:ml-12"></VpnKeyIcon>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-s mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center mb-8">
                <button className="btn bg-[#06283d] text-[#dff6ff] justify-center mt-8 ml-6 w-48 shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
                  Zaloguj się
                </button>
              </div>
              {response && <Info responseData={response}></Info>}
              <p className="text-dark-blue text-center mb-8">
                <Link to="../register">
                  Jeśli nie masz jeszcze konta, zarejestruj się!
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
