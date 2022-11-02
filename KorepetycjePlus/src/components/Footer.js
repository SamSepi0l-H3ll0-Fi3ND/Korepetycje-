import SchoolIcon from "@mui/icons-material/School";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return(
        <div class="flex justify-between">
            <div class="flex ml-10 mt-2">
                <a class="btn btn-ghost"><FacebookIcon class="footer-icon w-6"></FacebookIcon></a>
                <a class="btn btn-ghost"><InstagramIcon class="footer-icon w-6"></InstagramIcon></a>
                <a class="btn btn-ghost"><TwitterIcon class="footer-icon w-6"></TwitterIcon></a>
            </div>
            <div class="footer-center mr-10">
                <p class="flex normal-case text-2xl decoration-white gap-2 hover:text-[#06283d] m-4 font-bold">
                <SchoolIcon class="footer-icon w-10 mr-4"></SchoolIcon>Korepetycje+
                </p>
            </div>
            <div class="mr-20">
                <p class="flex normal-case text-md decoration-white gap-2 hover:text-[#06283d] mt-6 font-bold">&copy; 2022 Firma</p>
            </div>
        </div>
    );
};

export default Footer;