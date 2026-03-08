import heroBg from "@/assets/hero-bg.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="w-full pt-16">
      <img
        src={heroBg}
        alt="Laantern GPS Tracking - Advanced GPS Tracking for Complete Vehicle Safety"
        className="w-full h-auto block"
        loading="eager"
      />
    </section>
  );
};

export default HeroSection;
