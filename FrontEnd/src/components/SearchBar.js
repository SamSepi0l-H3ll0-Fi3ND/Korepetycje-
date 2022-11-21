const SearchBar = () => {
  return (
    <div>
      <div className="flex justify-center mt-8 mb-6">
        <a className="text-4xl text-center text-dark-blue font-bold">
          Czego chciałbyś się nauczyć?
        </a>
      </div>
      <div className="flex justify-center mt-8 mb-6">
          <input
          type="text"
          placeholder="Szukaj korepetycji"
          class="input input-bordered border-neutral-700 bg-[#faf9fa] w-4/5 max-w-3xl rounded-none rounded-l-3xl text-[#06283d]"
          />
          <button class="btn bg-dark-blue text-[#dff6ff] rounded-none rounded-r-3xl w-1/3 sm:w-1/6 lg:w-1/12">Szukaj</button>
      </div>
      <div className="flex justify-center mb-8">
        <a className="text-4xl text-center text-dark-blue font-bold">
          Popularne Przedmioty
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
