const Info = (props) => {

    const { responseData } = props;
    return (
    <p class="flex text-2xl m-4 justify-center text-[#FF0000]">
        {responseData.status}
        {console.log(responseData)}
    </p>
    );
  };
  
  export default Info;