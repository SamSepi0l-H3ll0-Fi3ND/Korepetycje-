const Steps = () => {
  return (
    <div className="bg-[#D6F4FE]">
      <div>
        <p className="flex justify-center text-3xl mt-16 font-semibold text-dark-blue">
          {" "}
          Jak to wygląda?{" "}
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <ul class="steps w-2/3">
          <li class="step step-info">
            Znajdz korki <br></br> Wszystkie korki w jednym miejscu{" "}
          </li>

          <li class="step step-info">
            Naucz się <br></br>Łatwo dostępna nauka
          </li>
          <li class="step step-info">
            Zalicz <br></br>Zdaj każdy egazmin
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Steps;
