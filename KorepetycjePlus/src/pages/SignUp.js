import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const SignUp = () => {
  return (
    <div>
      <div class="flex justify-center">
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
            />
          </div>
          <div class="ml-14">
            <p class="ml-20 text-dark-blue font-bold">Adres e-mail</p>
          </div>
          <div class="flex">
            <AlternateEmailIcon class="justify-center w-16 ml-12"></AlternateEmailIcon>
            <input
              type="text"
              placeholder="Username"
              class="input input-bordered border-neutral-700 bg-[#faf9fa] w-50 max-w-xs mt-2 ml-4 shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
            />
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
            <button class="btn bg-[#06283d] text-[#dff6ff] justify-center my-14 ml-6 w-48 shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
              Zarejestruj się
            </button>
          </div>
          <p className="text-dark-blue text-center mb-8">
            <Link to="../register">Jeśli masz już konto, zaloguj się!</Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
