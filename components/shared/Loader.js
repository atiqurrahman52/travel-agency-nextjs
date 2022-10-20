const Loader = () => {
  return (
    <section
      id="preloader"
      className="flex items-center justify-center absolute h-full w-full bg-white z-[9999]"
    >
      <div className="loading font-bold text-accent text-3xl sm:text-6xl">
        <span>T</span>
        <span>O</span>
        <span>U</span>
        <span>R</span>
        <span>E</span>
        <span>L</span>
        <span>I</span>
        <span>S</span>
        <span>H</span>
      </div>
    </section>
  );
};

export default Loader;
