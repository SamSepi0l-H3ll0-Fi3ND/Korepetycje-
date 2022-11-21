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

const Subjects = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 text-center justify-items-center text-dark-blue text-xl pt-6 pb-6 ">
        <div className="text-2xl font-bold px-16 py-2 underline underline-offset-8">
          Ścisłe
        </div>
        <div className="text-2xl font-bold  px-16 py-2 underline underline-offset-8">
          Artystyczne
        </div>
        <div className="text-2xl font-bold  px-16 py-2 underline underline-offset-8">
          Humanistyczne
        </div>
        <div className="text-2xl font-bold px-16 py-2 underline underline-offset-8">
          Języki obce
        </div>
        <div>
          {" "}
          <CalculateIcon></CalculateIcon> Matematyka
        </div>
        <div>Polski</div>
        <div>
          <MusicNoteIcon></MusicNoteIcon> Muzyka
        </div>
        <div>Angielski</div>
        <div>
          <BiotechIcon></BiotechIcon> Biologia
        </div>
        <div>
          <RestoreIcon></RestoreIcon> Historia
        </div>
        <div>
          <BrushIcon></BrushIcon> Plastyka
        </div>
        <div>Niemiecki</div>
        <div>
          <ScienceIcon></ScienceIcon> Chemia
        </div>
        <div>
          <GavelIcon></GavelIcon> WOS
        </div>
        <div>
          <LocalSee></LocalSee> Fotografia
        </div>
        <div>Włoski</div>
        <div>
          <PsychologyIcon></PsychologyIcon> Fizyka
        </div>
        <div>
          <AccountBalanceIcon></AccountBalanceIcon> WOK
        </div>
        <div>
          <TheatersIcon></TheatersIcon>Aktorstwo
        </div>
        <div>Hiszpański</div>
        <div>
          <DevicesIcon></DevicesIcon> Informatyka
        </div>
        <div>
          <PersonIcon></PersonIcon>Etyka
        </div>
        <div>
          <KeyboardVoiceIcon></KeyboardVoiceIcon>Emisja głosu
        </div>
        <div>Francuski</div>
      </div>
      <div>
        <p class="flex justify-center font-semibold text-2xl underline mt-8  mb-8 text-dark-blue  underline-offset-1">
          Wszystkie kategorie
        </p>
      </div>
    </div>
  );
};

export default Subjects;

// <div>
//   <div class="flex justify-center overflow-x-auto bg-light-blue ">
//     <table class="table w-4/5 bg-light-blue">
//       <thead className="text-2lg">
//         <tr>
//           <th >Ścisłe</th>
//           <th>Humanistyczne</th>
//           <th>Artystyczne</th>
//           <th>Języki obce</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>
//             <CalculateIcon></CalculateIcon> Matematyka
//           </td>
//           <td>Polski</td>
//           <td>
//             <MusicNoteIcon></MusicNoteIcon> Muzyka
//           </td>
//           <td>Angielski</td>
//         </tr>

//         <tr>
//           <td>
//             <BiotechIcon></BiotechIcon> Biologia
//           </td>
//           <td>
//             <RestoreIcon></RestoreIcon> Historia
//           </td>
//           <td>
//             <BrushIcon></BrushIcon> Plastyka
//           </td>
//           <td>Niemiecki</td>
//         </tr>

//         <tr>
//           <td>
//             <ScienceIcon></ScienceIcon> Chemia
//           </td>
//           <td>
//             <GavelIcon></GavelIcon> WOS
//           </td>
//           <td>
//             <LocalSee></LocalSee> Fotografia
//           </td>
//           <td>Włoski</td>
//         </tr>

//         <tr>
//           <td>
//             <PsychologyIcon></PsychologyIcon>Fizyka
//           </td>
//           <td>
//             <AccountBalanceIcon></AccountBalanceIcon>
//             WOK
//           </td>
//           <td>
//             <TheatersIcon></TheatersIcon>Aktorstwo
//           </td>
//           <td>Hiszpański</td>
//         </tr>

//         <tr>
//           <td>
//             <DevicesIcon></DevicesIcon> Informatyka
//           </td>
//           <td>
//             <PersonIcon></PersonIcon>Etyka
//           </td>
//           <td>
//             <KeyboardVoiceIcon></KeyboardVoiceIcon>Emisja głosu
//           </td>
//           <td>Francuski</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
//   <div>
//     <p class="flex justify-center font-semibold text-2xl underline mt-8  mb-8 text-dark-blue  underline-offset-1">
//       Wszystkie kategorie
//     </p>
//   </div>
// </div>
