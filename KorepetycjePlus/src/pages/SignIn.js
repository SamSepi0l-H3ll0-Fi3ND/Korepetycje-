import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const SignIn = () => {
    return (
      <div class = "flex justify-center">
        <div class = "grid rounded-md bg-[#d6f4fe] flex justify-center m-8 w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
          <div class="pt-6 px-10 text-center mr-4">
            <p class = "text-4xl text-center text-dark-blue font-bold pt-6 px-20 pb-14">Logowanie</p>
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
          <div class="flex justify-center mb-16">
            <button class="btn bg-[#06283d] text-[#dff6ff] justify-center my-14 ml-6 w-48 shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">Zaloguj się</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignIn;