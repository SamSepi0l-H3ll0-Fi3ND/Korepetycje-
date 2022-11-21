import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const Ad = () => {
    return(
        <div class="h-auto bg-[#d0dfe9] rounded-md w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.5)] text-dark-blue">
            <div class="flex flex-col sm:flex-row">
                <div class="flex flex-col justify center">
                    <div class="flex justify-center mt-4">
                        <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" class="w-24 shadow-[0_0_16px_0_rgba(0,0,0,0.5)] m-2" alt="jakis_image"></img>
                    </div>
                    <div class="flex flex-col justify-center text-center m-2">
                        <p class="text-2xl ml-2">Imię</p>
                        <p class="text-2xl ml-2">Nazwisko</p>
                    </div>
                </div>
                <div>
                    <div class="flex mt-4">
                        <p class="text-2xl ml-6">Przedmiot</p>
                    </div>
                    <div class="flex justify-center p-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nunc condimentum nulla nisl, et consequat nulla sagittis sagittis. 
                        </p>
                    </div>
                </div>
                <div class="flex flex-col m-4">
                    <div class="flex flex-col mt-2">
                        <div class="flex justify-center m-2">
                            <MonetizationOnIcon/>Cena/1h
                        </div>
                        <div class="flex justify-center m-2">
                            <CallIcon/> <p>Nr telefonu</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="btn btn-ghost flex justify-center">
                            <MessageIcon/> Wyślij wiadomość
                        </div>
                        <div class="flex justify-center m-2">
                            <LocationOnIcon/> Lokalizacja
                            <StarIcon/> Ocena (Ile opinii)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ad;