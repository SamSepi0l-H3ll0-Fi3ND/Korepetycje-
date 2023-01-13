import CalculateIcon from "@mui/icons-material/Calculate";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";
import PsychologyIcon from "@mui/icons-material/Psychology";
import DevicesIcon from "@mui/icons-material/Devices";
import RestoreIcon from "@mui/icons-material/Restore";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BrushIcon from "@mui/icons-material/Brush";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import LocalSee from "@mui/icons-material/LocalSee";
import TheatersIcon from "@mui/icons-material/Theaters";

import { Link } from "react-router-dom";

const Subject = ({ name }) => {
    const returnIcon = () => {
        switch (name) {
            case "Matematyka":
                return <CalculateIcon/>;
            case "Polski":
                return ;
            case "Muzyka":
                return <MusicNoteIcon/>;
            case "Angielski":
                return ;
            case "Biologia":
                return <BiotechIcon/>;
            case "Historia":
                return <RestoreIcon/>;
            case "Plastyka":
                return <BrushIcon/>;
            case "Niemiecki":
                return ;
            case "Chemia":
                return <ScienceIcon/>;
            case "WOS":
                return <GavelIcon/>;
            case "Fotografia":
                return <LocalSee/>;
            case "Włoski":
                return ;
            case "Fizyka":
                return <PsychologyIcon/>;
            case "WOK":
                return <AccountBalanceIcon/>;
            case "Aktorstwo":
                return <TheatersIcon/>;
            case "Hiszpański":
                return ;
            case "Informatyka":
                return <DevicesIcon/>;
            case "Etyka":
                return <PersonIcon/>;
            case "Emisja głosu":
                return <KeyboardVoiceIcon/>;
            case "Francuski":
                return ;
            default:
                return;
        }
    }

    return (
        <Link to={`/announcements/${name}`} >
            <div>
                {returnIcon()} {name}
            </div>
        </Link>
    );
}

export default Subject;