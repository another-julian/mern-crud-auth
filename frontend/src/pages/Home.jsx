function Home() {
  return (
    <main className="w-full">
      <section className="h-screen w-full  bg-light">
        <div className="h-[80%] flex flex-col justify-end align-middle items-center">
          <span className="mb-12 text-secondary text-4xl font-medium">
            welcome to
          </span>
          <h1 className="mb-16 text-7xl font-bold text-secondary tracking-wider">
            <span
              className="bg-secondary text-light px-7
          "
            >
              TASK
            </span>{" "}
            TRACK
          </h1>
          <button className="bg-primary py-2 px-10 text-2xl tracking-widest font-bold shadow-lg text-light ">
            START
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
