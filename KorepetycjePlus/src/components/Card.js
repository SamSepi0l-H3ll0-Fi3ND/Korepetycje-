const Card = () => {
  return (
    <div class="hero min-h-screen bg-[#d6f4fe]">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div className=":m-2 text-[#06283d] md:text-center ">
          <h1 class="text-5xl font-bold  ">Lorem ipsum!</h1>
          <p class="py-6">
            Lorem pomo to ero cos moko doko emorze. Edke peteke, mosva screen.
          </p>
          <a class="btn btn-wide rounded-full bg-[#06283d] text-[#dff6ff]">
            Załóż konto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
