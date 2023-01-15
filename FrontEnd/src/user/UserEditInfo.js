import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import API from "../env";
import { useNavigate } from "react-router-dom";

const UserEditInfo = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const [user, setUser] = useState({
    Id: 0,
    FirstName: state.firstName,
    LastName: state.lastName,
    Address: state.address,
    Email: state.email,
    PhoneNumber: state.phoneNumber,
    Description: state.description,
  });

  const onChange = (e) => {
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
  };

  const deleteUser = async () => {
    const response = await fetch(`${API}/User`, {
      method: "Delete",
      headers: {
        Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      localStorage.removeItem("Tajny numerek");
      navigate("/");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${API}/User`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        Authorization: "bearer " + localStorage.getItem("Tajny numerek"),
        "Content-Type": "application/json",
      },
    });
    navigate("/userinfo");
  };
  return (
    <>
      <Nav></Nav>
      <div className="grid h-screen justify-center place-items-center ">
        <div className="card w-96 bg-dark-blue w-1/3 rounded-none shadow-xl">
          <div className="flex justify-between">
            <div className="text-start">
              <Logo></Logo>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col  space-y-4 card-body">
              <h2 className="text-white text-center text-3xl underline underline-offset-8">
                Cześć {state.userName}!
              </h2>
              <div className=" text-center">Informacje o Tobie:</div>
              <div className=" text-center text-white">
                {" "}
                <textarea
                  name="Description"
                  class="textarea textarea-bordered w-80"
                  placeholder="Bio"
                  onChange={onChange}
                  defaultValue={user.Description}
                ></textarea>
              </div>
              <div>
                <hr />
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="flex flex-col space-y-2">
                  <p>Zmień imie</p>
                  <p className="text-white text-2xl">
                    <input
                      name="FirstName"
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full input-info max-w-xs"
                      onChange={onChange}
                      value={user.FirstName}
                    />
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p>Zmień nazwisko</p>
                  <p className="text-white text-2xl">
                    <input
                      name="LastName"
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full input-info max-w-xs"
                      value={user.LastName}
                      onChange={onChange}
                    />{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p>Zmień Nr telefonu:</p>
                  <p className="text-white text-2xl">
                    <input
                      name="PhoneNumber"
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered w-full input-info max-w-xs"
                      value={user.PhoneNumber}
                      onChange={onChange}
                    />
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p>Zmień address</p>
                  <p className="text-white text-2xl">
                    <input
                      name="Address"
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info w-full max-w-xs"
                      value={user.Address}
                      onChange={onChange}
                    />{" "}
                  </p>
                </div>
                <div className="col-span-2 flex flex-col space-y-2">
                  <p>Zmień email</p>
                  <p className="text-white text-2xl">
                    <input
                      name="Email"
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info w-full max-w-xs"
                      value={user.Email}
                      onChange={onChange}
                    />
                  </p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-4">
                <button className="btn btn-success text-white border-2">
                  Zapisz zmiany
                </button>
                <Link to="/userinfo">
                  <p className="btn bg-white text-dark-blue border-info border-2">
                    Przejdź do profilu
                  </p>
                </Link>
              </div>
            </div>
          </form>
          <button
            onClick={deleteUser}
            className="btn rounded-none btn-error text-white border-2"
          >
            Usuń konto
          </button>
        </div>
      </div>
    </>
  );
};

export default UserEditInfo;
