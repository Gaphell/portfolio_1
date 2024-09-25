import Typography from "@/app/ui/typography";
import Banner from "@/app/components/Banner";
import Link from "next/link";
import Experience from "@/app/pages/Experience";
import hello from './images/hello.svg'

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-start sticky top-0 bg-white z-10 pt-4 pb-2 px-10">
          <div>
            <Link href={'/'}>
              <Typography h1>Tenzin Gaphel</Typography>
              <Typography h2>Frontend Developer</Typography>
            </Link>
          </div>
          <div className="flex flex-row gap-8">
            <Link href={'#experience'}>
              <Typography h3>Experience</Typography>
            </Link>
            <Link href={'#technical-skills'}>
              <Typography h3>Technical Skills</Typography>
            </Link>
            <Link href={'#notable-projects'}>
              <Typography h3>Notable Projects</Typography>
            </Link>
            <div
              className="relative min-w-20">
              <div className="absolute -top-7 right-0">
                <img
                  src={hello.src}
                  alt="Background"
                  className="object-cover w-full h-full" // Adjust opacity as needed
                />
              </div>
              <div className="relative z-10 text-center">
                <Typography h2>Say Hi!</Typography>
              </div>
            </div>
          </div>
        </div>
        <Banner/>
        <div className="flex-1 gap-4">
          <div id='experience'>
            <Experience/>
          </div>
          <div id='technical-skills' className="p-40">technical-skills</div>
          <div id='notable-projects' className="p-40">notable-projects</div>
        </div>
      </div>
    </div>
  );
}
