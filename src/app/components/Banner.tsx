import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo.svg";
import github from "@/app/images/github.svg";
import gmail from "@/app/images/gmail.svg";
import linked from "@/app/images/linkedin.svg";
import Typography from "@/app/ui/typography";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Banner = async () => {
  await delay(2000);
  
  return (
    <div className="flex flex-col py-20 px-40 gap-14 min-h-screen">
      
      <div className="flex flex-row justify-between items-end sticky top-0 z-20">
        <div className={'flex flex-col gap-2'}>
          <Link href={'/'}>
            <div className='flex flex-row items-end gap-4'>
              <Image
                src={logo}
                alt="Logo"
                width={48}
                height={48}
                className="object-cover rounded-full"
              />
              <Typography h2 className="text-secondary">Frontend Developer</Typography>
            </div>
          </Link>
        </div>
        <div className="flex-row gap-6 hidden lg:flex text-primary">
          <Link href={'/about'}>
            <Typography h3 className="font-medium">About</Typography>
          </Link>
          <Link href={'/projects'}>
            <Typography h3 className="font-medium">Projects</Typography>
          </Link>
          <Link href={'/contact'}>
            <Typography h3 className="font-medium">Contact</Typography>
          </Link>
        </div>
      </div>
      <div className="max-w-max">
        <Typography h1
                    className="leading-relaxed text-primary overflow-hidden whitespace-nowrap animate-typing pr-1 relative">
          <span className="absolute right-0 top-0 h-full border-r-2 border-current animate-blink"
                style={{width: '2px'}}/>
          <span className="ml-1">{`I'm `}</span>
          
          <span className="inline-block group relative">
          <span className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
            བསྟན་འཛིན་ དགའ་འཕེལ།
          </span>
          <span
            className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 delay-200">
            Tenzin Gaphel.
          </span>
        </span>
        </Typography>
      </div>
      <div className="flex flex-1">
        <Typography>
          <p>
            Frontend Developer with expertise in creating responsive, high-performance web and mobile
            applications.
          </p>
          <br/>
          <p>
            Proficient in React, React Native, TypeScript, and other modern technologies. Experienced in
            leading development teams, optimizing UX/UI, and solving complex technical challenges.
          </p>
          <br/>
          <p>
            Passionate about
            continuous learning, and building impactful digital products. Strong communication and problem-solving
            skills
            developed through diverse, cross-functional team collaborations.
          </p>
        </Typography>
      </div>
      
      <div className='flex justify-between items-end'>
        <div className={'flex flex-row gap-4'}>
          <Link href={'https://github.com/Gaphell'} target="_blank" rel="noopener noreferrer">
            <Image src={github} alt="GitHub" width={24} height={24} className="object-cover"/>
          </Link>
          <Link href={'mailto:tenzin606gaphel@gmail.com'}>
            <Image src={gmail} alt="Gmail" width={24} height={24} className="object-cover"/>
          </Link>
          <Link href={'https://www.linkedin.com/in/tenzin-gaphel-65014319a/'} target="_blank"
                rel="noopener noreferrer">
            <Image src={linked} alt="LinkedIn" width={24} height={24} className="object-cover"/>
          </Link>
        </div>
        <Typography className="!text-sm">© {new Date().getFullYear()}. All rights
          reserved.</Typography>
      </div>
    </div>
  );
};

export default Banner;
