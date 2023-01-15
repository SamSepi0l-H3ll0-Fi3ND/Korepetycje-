import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { useState } from "react";
import API from "../env";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const SignUp = () => {
  const navigate = useNavigate();
  var [response, setResponse] = useState();
  var [response2, setResponse2] = useState();
  var [checked, setChecked] = useState();
  var [afterSubmit, setAfterSubmit] = useState();

  async function registerSubmit(e) {
    const formdata = new FormData(e.target);
    var jsonObject = {};
    formdata.forEach((value, key) => (jsonObject[key] = value));
    setAfterSubmit(true);
    e.preventDefault();

    try {
      if (!checked) {
        console.log("Akceptuj regulamin!");
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
            <div className="sm:rounded-md bg-[#d6f4fe] flex flex-col justify-center sm:mt-20 mt-4 w-screen sm:w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
              <div className="pt-6 px-10 text-center mr-4">
                <p className="text-4xl text-center text-dark-blue font-bold pt-6 sm:px-20 pb-14">
                  Rejestracja
                </p>
              </div>
              <FormInput name="username" placeholder="Username" label="Nazwa Użytkownika"/>
              <FormInput name="firstname" placeholder="Firstname" label="Imie"/>
              <FormInput name="lastname" placeholder="Last name" label="Nazwisko"/>
              <FormInput name="address" placeholder="Address" label="Adres"/>
              <FormInput name="email" placeholder="Email" label="Adres e-mail"/>
              <FormInput name="password" placeholder="Password" label="Hasło" type="password"/>
              <FormInput name="confirmPassword" placeholder="Confirm password" label="Potwierdź hasło" type="password"/>
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
                <button className="btn bg-[#06283d] text-[#dff6ff] mt-8 w-48 shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
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
                  <p className="flex flex-col text-xl m-2 text-center text-[#FF0000]">
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
