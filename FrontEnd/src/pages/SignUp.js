import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { useState } from "react";
import API from "../env";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const regulamin = `1.1. Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod obecnym adresem.
1.2. Niniejszy Regulamin jest regulaminem, o którym mowa w art. 8 Ustawy o świadczeniu usług drogą elektroniczną.
1.3. Serwis internetowy, działający pod obecnym adresem, prowadzony jest przez nas.
1.4. Niniejszy Regulamin określa w szczególności:
a.) zasady dokonywania rejestracji i korzystania z konta w ramach serwisu internetowego;
b.) warunki i zasady dokonywania elektronicznej rezerwacji produktów dostępnych w ramach serwisu internetowego;
c.) warunki i zasady składania drogą elektroniczną Zamówień w ramach serwisu internetowego;
d.) zasady zawierania Umów sprzedaży z wykorzystaniem usług świadczonych w ramach serwisu Internetowego.
1.5. Korzystanie ze serwisu internetowego jest możliwe pod warunkiem spełnienia przez system teleinformatyczny, z którego korzysta Klient następujących minimalnych wymagań technicznych:
a.) Edge w wersji 17 lub nowszej z włączoną obsługą js, lub
b.) Chrome w wersji 109.0 lub nowszej z włączoną obsługą js, c.) minimalna rozdzielczość ekranu 375 x 667 pikseli.
1.6. W celu korzystania ze serwisu internetowego Klient powinien we własnym zakresie uzyskać dostęp do stanowiska komputerowego lub urządzenia końcowego, z dostępem do Internetu.
1.7. Zgodnie z obowiązującymi przepisami prawa prowadzący serwis zastrzega sobie możliwość ograniczenia świadczenia usług za pośrednictwem serwisu internetowego do osób, które ukończyły wiek 18 lat. W takim przypadku potencjalni Klienci zostaną o powyższym powiadomieni.
1.8. Klienci mogą uzyskać dostęp do niniejszego Regulaminu w każdym czasie za pośrednictwem odsyłacza zamieszczonego na stronie głównej serwisu oraz pobrać go i sporządzić jego wydruk.
1.9. Informacje o Towarach podane na stronach internetowych serwisu, w szczególności ich opisy, parametry techniczne i użytkowe oraz ceny, stanowią zaproszenie do zawarcia umowy, w rozumieniu art. 71 Kodeksu Cywilnego.`

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
                  <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                      <h3 className="text-lg font-bold">Regulamin</h3>
                      <p className="py-4">{regulamin.split('\n').map(line => <p>{line}<br/><br/></p>)}</p>
                    </div>
                  </div>
                <p className="sm:mt-10 mt-2 ml-6 text-dark-blue">
                  Akceptuje{" "}
                  <label htmlFor="my-modal-3" className="underline underline-offset-2 cursor-pointer">
                    regulamin*
                  </label>
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
