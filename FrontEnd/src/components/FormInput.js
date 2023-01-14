import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";

const FormInput = ({name, placeholder, label, type="text"}) => {
    const returnIcon = () => {
        switch(name) {
            case "username":
                return <AccountCircleIcon/>;
            case "address":
                return <HomeIcon/>;
            case "email":
                return <AlternateEmailIcon/>;
            case "password":
                return <VpnKeyIcon/>;
            default:
                return;
        }
    }

    return (
        <div className="flex justify-center p-1">
            <div className="flex flex-nowrap flex-col">
                <p className="text-dark-blue font-bold pb-1">
                    {returnIcon()} {label}
                </p>

                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="input input-bordered input-sm sm:input sm:bg-[#faf9fa] border-neutral-700 bg-[#faf9fa] w-50 max-w-s shadow-[0_0_16px_0_rgba(0,0,0,0.7)] text-dark-blue"
                />
            </div>
        </div>
    );
}

export default FormInput;