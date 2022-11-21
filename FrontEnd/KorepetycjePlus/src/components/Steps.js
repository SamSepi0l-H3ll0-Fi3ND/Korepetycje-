import FindInPageIcon from "@mui/icons-material/FindInPage";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import GradeIcon from "@mui/icons-material/Grade";
const Steps = () => {
  return (
    <div className="bg-[#D6F4FE]">
      <div>
        <p className="flex justify-center text-3xl mt-16 pt-8 pb-4 font-semibold text-dark-blue">
          {" "}
          Jak to wygląda?{" "}
        </p>
      </div>
      <div className="flex justify-center ">
        <ul class="steps w-2/3 text-dark-blue pb-8">
          <li class="step step-info">
            <FindInPageIcon className="fill-light-blue"></FindInPageIcon>
            Znajdz korki <br></br>
            <span className="pt-4"> Wszystkie korki w jednym miejscu</span>
          </li>

          <li class="step step-info ">
            <CastForEducationIcon></CastForEducationIcon>
            Naucz się <br></br>
            <span className="pt-4">Łatwo dostępna nauka</span>
          </li>
          <li class="step step-info ">
            <GradeIcon></GradeIcon>
            Zalicz <br></br>
            <span className="pt-4">Zdaj każdy egazmin</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Steps;
