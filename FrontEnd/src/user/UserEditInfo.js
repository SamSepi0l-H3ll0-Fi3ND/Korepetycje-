import Logo from "../components/Logo";
import Nav from "../components/Nav";
const UserEditInfo = () => {
  const user = {
    userName: "Kuba",
  };
  return (
    <>
      <Nav></Nav>
      <div className="grid h-screen justify-center place-items-center ">
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique, explicabo.
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
                <p>Zmień email</p>
                <p className="text-white text-2xl">
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered input-info w-full max-w-xs"
                  />
                </p>
              </div>
            </div>
            <div class=" grid grid-cols-2 gap-4">
              <button class="btn btn-success text-white border-2">
                Zapisz zmiany
              </button>
              <button class="btn bg-white text-dark-blue border-info border-2">
                Przejdź do profilu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditInfo;
