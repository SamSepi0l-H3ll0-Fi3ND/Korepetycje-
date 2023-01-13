import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from "@mui/icons-material/School";


const Ad = (props) => {
  const { adData } = props;

  const student = "#d0dfe9";
  const tutor = "#a0bdcf";
  const search = "Szukam korepetycji - ";
  const teach = "Udzielam korepetycji - "

  return (
    <div
      class={`h-auto bg-[${adData.type === "Korepetytor" ? tutor : student}] rounded-md w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.5)] text-dark-blue m-3`}
      id={`Ad${adData.id}`}
    >
      <div class="flex flex-col sm:flex-row">
        <div class="flex flex-col justify-center sm:basis-1/12">
          <div class="flex justify-center mt-4">
            {adData.type && adData.type === "Uczen" ? <SearchIcon class="w-auto"></SearchIcon> : <SchoolIcon class="w-auto"></SchoolIcon>}
          </div>
          <div class="flex flex-col justify-center text-center m-2">
            <p class="text-2xl ml-2">{adData.user.firstName}</p>
            <p class="text-2xl ml-2">{adData.user.lastName}</p>
          </div>
        </div>
        <div class="flex sm:flex-col sm:basis-9/12">
          <div class="flex sm:justify-left mt-4">
            <p class="text-2xl ml-6">{adData.type === "Korepetytor" ? teach : search}{adData.subject.name}</p>
          </div>
          <div class="flex justify-left p-6">{<p>{adData.description}</p>}</div>
        </div>
        <div class="flex flex-col m-4 sm:basis-2/12">
          <div class="flex flex-col mt-2">
            <div class="flex justify-center m-2">
              <MonetizationOnIcon /> {adData.price}zł / {adData.lessonLength}{" "}
              minut
            </div>
            <div class="flex justify-center m-2">
              <CallIcon /> <p>{adData.user.phoneNumber}</p>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="btn btn-ghost flex justify-center">
              <MessageIcon /> Wyślij wiadomość
            </div>
            <div class="flex justify-center m-2">
              <LocationOnIcon /> {adData.user.address} 
              <StarIcon /> {adData.user.rate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
