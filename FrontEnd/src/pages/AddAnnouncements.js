import Nav from "../components/Nav";
import AddCardIcon from "@mui/icons-material/AddCard";
const AddAnnouncements = () => {
  return (
    <div className="bg-white h-screen">
      <Nav></Nav>
      <div className="flex justify-center h-2/6 bg-dark-blue text-light-blue text-center w-full">
        <div className="self-center">
          <p className="text-4xl">Dodaj swoje nowe ogłoszenie!</p>
          <p>W tym miejscu stworzysz ogłoszenie</p>
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncements;
