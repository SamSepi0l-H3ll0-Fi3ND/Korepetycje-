import Logo from "../components/Logo";

import SettingsIcon from "@mui/icons-material/Settings";
const UserEditInfo = () => {
  const user = {
    userName: "Kuba",
  };
  return (
    <div class="card w-96 bg-dark-blue w-1/3 rounded-none shadow-xl">
      <div className="flex justify-between">
        <div className="text-start">
          <Logo></Logo>
        </div>
      </div>
      <div class="flex flex-col  space-y-4 card-body">
        <h2 class="text-white text-center text-3xl underline underline-offset-8">
          Cześć {user.userName}!
        </h2>

        <div className=" text-center">Informacje o Tobie:</div>
        <div className=" text-center text-white">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
          explicabo.
        </div>
        <div>
          <hr />
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="flex flex-col space-y-2">
            <p>Zmień imie</p>
            <p className="text-white text-2xl">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full input-info max-w-xs"
              />
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Zmień nazwisko</p>
            <p className="text-white text-2xl">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full input-info max-w-xs"
              />{" "}
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Zmień nick</p>
            <p className="text-white text-2xl">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full input-info max-w-xs"
              />
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Zmień address</p>
            <p className="text-white text-2xl">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered input-info w-full max-w-xs"
              />{" "}
            </p>
          </div>
          <div className="col-span-2 flex flex-col space-y-2">
            <p>Zmień address</p>
            <p className="text-white text-2xl">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered input-info w-full max-w-xs"
              />
            </p>
          </div>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-info text-white border-2">Zmień informacje</button>
        </div>
      </div>
    </div>
  );
};

export default UserEditInfo;
