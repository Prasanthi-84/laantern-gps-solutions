import heroBg from "@/assets/hero-bg.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full mt-16">
      <img
        src={heroBg}
        alt="Laantern GPS Tracking - Advanced GPS Tracking for Complete Vehicle Safety"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-background/30" />
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* No overlay text per requirements - the hero image contains all text */}
      </div>
    </section>
  );
};

export default HeroSection;
