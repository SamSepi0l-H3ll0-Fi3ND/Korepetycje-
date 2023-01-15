import { Link } from "react-router-dom";

const Card = ({token}) => {

  return (
    <div className="hero min-h-screen bg-[#d6f4fe]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Nawet nie mam pojecia co jest na tym zdjeciu"
        />
        <div className=":m-2 text-[#06283d] md:text-center ">
          <h1 className="text-5xl font-bold  ">Zacznij się uczyć <br></br>lub ucz innych!</h1>
          {!token && (
            <div>
            <p className="py-6">
            Załóż konto i wyszukaj profesjonalnych korepetycji, lub też sam takie ogłoś!
          </p>
          <Link to="/register">
            <div className="btn btn-wide rounded-full bg-[#06283d] text-[#dff6ff]">
              Załóż konto
            </div>
          </Link>
          </div>
          )}
          {
            token && (
              <div>
              <p className="py-6">
                Ucz się z profesjonalnymi korepetytorami, lub też sam zacznij uczyć innych!
            </p>
              <Link to="/announcements/all">
                <div className="btn btn-wide bg-[#06283d] text-[#dff6ff] max-w-sm mr-2">
                  Zacznij się uczyć!
                </div>
              </Link>
              <Link to="/addAnnouncements">
                <div className="btn btn-wide bg-[#06283d] text-[#dff6ff]">
                  Naucz innych!
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
