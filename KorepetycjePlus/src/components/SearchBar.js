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
          placeholder="Type here"
          class="input input-bordered border-neutral-700 bg-[#faf9fa] w-4/5 max-w-xs "
        />
        <button class="btn bg-dark-blue text-[#dff6ff]">Szukaj</button>
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
