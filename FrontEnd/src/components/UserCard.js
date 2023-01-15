

import DeleteIcon from '@mui/icons-material/Delete';

const UserCard = ({user, delete: del}) => {

  return (
    <div className="h-auto bg-dark-blue text-white rounded-md w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.5)] text-dark-blue mx-10">
      <div className="grid grid-cols-7 gap-4 mt-2 text-center">
          <div className="flex flex-col space-y-2 ">
            <p className="text-white text-l"> {user.firstName} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-l"> {user.lastName} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-l"> {user.address} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-l"> {user.rate} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-l"> {user.email} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-l"> {user.phoneNumber} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-l"><button onClick={del(user.id)}><DeleteIcon/></button></p>      
          </div>
        </div>
    </div>
  );
};

export default UserCard;
