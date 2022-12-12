const Info = (props) => {
  const { responseData } = props;
  console.log("info", responseData);
  const info = responseData.split("<br>");

  return (
    <p class="flex flex-col text-xl m-4 text-center text-[#FF0000]">
      {info.map((element) => (
        <p>
          {element}
          <br />
        </p>
      ))}
    </p>
  );
};

export default Info;
