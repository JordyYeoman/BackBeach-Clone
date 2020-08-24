const Hero = () => {
  return (
    <div className="relative hero-banner">
      <img
        class="absolute top-0 h-full w-full object-hero-middle sm:object-top"
        src="/assets/home-banner.png"
      />
      <div className="relative py-16 px-4 sm:px-32 z-10">
        <h1 className="text-5xl sm:text-6xl font-bold pt-40 pb-4 Fredericka">
          A Dining Experience
        </h1>
      </div>
    </div>
  );
};

export default Hero;
