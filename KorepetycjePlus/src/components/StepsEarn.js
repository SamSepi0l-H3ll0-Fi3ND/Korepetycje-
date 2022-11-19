import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MoneyIcon from "@mui/icons-material/Money";

const StepsEarn = () => {
  return (
    <div className="bg-[]">
      <div>
        <p className="flex justify-center text-3xl mt-16 pt-8 pb-4 font-semibold text-dark-blue">
          {" "}
          Co dzięki nam zyskasz?{" "}
        </p>
      </div>
      <div className="flex justify-center ">
        <ul class="steps w-2/3 text-dark-blue pb-8">
          <li class="step step-neutral" data-content="">
            <ImportContactsIcon></ImportContactsIcon>
            Wiedza <br></br>
            <span className="pt-4">Ogrom wiedzy dostępny pod ręką</span>
          </li>

          <li class="step step-neutral   " data-content="">
            <SignalCellularAltIcon></SignalCellularAltIcon>
            Rozwój <br></br>
            <span className="pt-4">Gwarantowany rozówj osobisty</span>
          </li>
          <li class="step step-neutral " data-content="">
            <MoneyIcon></MoneyIcon>
            Kariera <br></br>
            <span className="pt-4">Dobrze płatna i interesująca praca</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StepsEarn;
