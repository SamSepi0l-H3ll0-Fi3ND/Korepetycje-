import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from '@mui/icons-material/Star';


const Review = (props) => {
  const {reviewData} = props

  return (
    <div
    className="h-auto bg-dark-blue text-white rounded-md w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.5)] text-dark-blue m-10"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col sm:basis-10/12">
          <div className="flex sm:justify-left mt-4">
          <AccountCircleIcon class="justify-center w-16 ml-12 fill-[#ffffff]"></AccountCircleIcon><p className="text-2xl ml-6 mt-4">{reviewData.author.firstName} {reviewData.author.lastName}</p>
          </div>
          <div className="flex justify-left p-6">
            <p className="ml-10 mb-10">
                {reviewData.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col mr-20 mt-6">
          <div className="flex flex-col mt-2 flex-end sm:basis-2/12">
            <div className="flex justify-center m-2 ml-10">
              <p className="text-2xl ml-6">Ocena</p>
            </div>
            <div className="flex justify-center m-2">
              <StarIcon class="justify-center w-8 ml-12 fill-[#ffffff]"></StarIcon><p className="text-2xl ml-6">{reviewData.rate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
