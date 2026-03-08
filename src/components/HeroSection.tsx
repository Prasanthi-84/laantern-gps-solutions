import heroBg from "@/assets/hero-bg.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full mt-16">
      <img
        src={heroBg}
        alt="Laantern GPS Tracking - Advanced GPS Tracking for Complete Vehicle Safety"
        className="w-full h-auto object-contain"
        loading="eager"
      />
    </section>
  );
};

export default HeroSection;
