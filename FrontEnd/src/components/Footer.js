import SchoolIcon from "@mui/icons-material/School";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class="grid grid-cols-3  border-t border-dark-blue rounded-none border-r-none w-full ">
      <div class="grid grid-cols-3 justify-items-center  invisible sm:visible ">
        <div className="">
          <a class="btn btn-ghost ">
            <FacebookIcon class="footer-icon w-6"></FacebookIcon>
          </a>
        </div>
        <div>
          <a class="btn btn-ghost">
            <InstagramIcon class="footer-icon w-6"></InstagramIcon>
          </a>
        </div>
        <div>
          <a class="btn btn-ghost">
            <TwitterIcon class="footer-icon w-6"></TwitterIcon>
          </a>
        </div>
      </div>
      <div class="grid  content-center">
        <Link to="../">
          <p class="flex justify-center normal-case text-2xl text-center decoration-white text-dark-blue font-bold">
            <SchoolIcon class="footer-icon  w-10"></SchoolIcon>Korepetycje+
          </p>
        </Link>
      </div>
      <div class="grid gap-2 content-center ">
        <p class="flex justify-center normal-case text-md decoration-white text-dark-blue font-bold invisible sm:visible">
          &copy; 2022 Firma
        </p>
      </div>
    </div>
  );
};

export default Footer;
