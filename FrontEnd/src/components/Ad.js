import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

const Ad = (props) => {
  const { adData } = props;
  console.log(adData);

  return (
    <div
      class="h-auto bg-[#d0dfe9] rounded-md w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.5)] text-dark-blue m-3"
      id={`Ad${adData.id}`}
    >
      <div class="flex sm:flex-row">
        <div class="flex flex-col justify-center basis-1/12">
          <div class="flex justify-center mt-4">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
              class="w-24 shadow-[0_0_16px_0_rgba(0,0,0,0.5)] m-2"
              alt="jakis_image"
            ></img>
          </div>
          <div class="flex flex-col justify-center text-center m-2">
            <p class="text-2xl ml-2">{adData.user.firstName}</p>
            <p class="text-2xl ml-2">{adData.user.lastName}</p>
          </div>
        </div>
        <div class="flex flex-col basis-9/12">
          <div class="flex justify-left mt-4">
            <p class="text-2xl ml-6">{adData.subject.name}</p>
          </div>
          <div class="flex justify-left p-6">{<p>{adData.description}</p>}</div>
        </div>
        <div class="flex flex-col m-4 basis-2/12">
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
