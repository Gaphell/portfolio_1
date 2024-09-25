import Typography from "@/app/ui/typography";

const Banner = () => {
  return (
    <div className="relative overflow-hidden p-28 text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#007165] to-[#00B5A1] opacity-80 animate-gradient"></div>
      <div className="relative z-10">
        <Typography h2>Frontend Developer with expertise in creating responsive, high-performance web and mobile
          applications. Proficient in React, React Native, TypeScript, and other modern technologies. Experienced in
          leading development teams, optimizing UX/UI, and solving complex technical challenges. Passionate about
          continuous learning, and building impactful digital products. Strong communication and problem-solving skills
          developed through diverse, cross-functional team collaborations.</Typography>
      </div>
    </div>
  );
};

export default Banner;
