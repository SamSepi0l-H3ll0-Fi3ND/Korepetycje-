import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../env";
import { useNavigate } from "react-router-dom";
import Info from "../components/Info";
import FormInput from "../components/FormInput";

const SignIn = () => {
  const navigate = useNavigate();
  var [response, setResponse] = useState();

  const getRole = (token) => {
    if(!token) token = localStorage.getItem("Tajny numerek");
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return (JSON.parse(jsonPayload))["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
}

  async function loginSubmit(e) {
    const formdata = new FormData(e.target);
    var jsonObject = {};
    formdata.forEach((value, key) => (jsonObject[key] = value));
    e.preventDefault();

    try {
      const response = await fetch(`${API}/Authentication/login`, {
        method: "POST",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObject),
      });
      if (!response.ok){
        const data = await response.json();
        setResponse(data);
        throw new Error(response.status);
      } 
      else {
        const token = await response.text();
        localStorage.setItem("Tajny numerek", token);
        localStorage.setItem("Role", getRole());
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
            <div className="sm:rounded-md bg-[#d6f4fe] flex flex-col justify-center sm:mt-20 mt-4 w-screen sm:w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
              <div className="pt-6 px-10 text-center mr-4">
                <p className="text-4xl text-center text-dark-blue font-bold pt-6 sm:px-20 pb-14">
                  Logowanie
                </p>
              </div>
              <FormInput name="username" placeholder="Username" label="Nazwa Użytkownika"/>
              <FormInput name="password" placeholder="Password" label="Hasło" type="password"/>
              <div className="flex justify-center mb-8">
                <button className="btn bg-[#06283d] text-[#dff6ff] justify-center mt-8 w-48 shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
                  Zaloguj się
                </button>
              </div>
              {response && <Info responseData={response}></Info>}
              <Link to="../register">
              <p className="text-dark-blue text-center mb-8">
                
                  Jeśli nie masz jeszcze konta, zarejestruj się!
              </p>
              </Link>
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
