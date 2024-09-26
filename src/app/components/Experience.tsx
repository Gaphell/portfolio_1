import Card from "@/app/components/Card";

const Experience = () => {
  
  const experiences = [
    {
      title: 'Software Engineer',
      duration: 'SELISE Digital Platforms July 2019 - April 2022 (Full time)',
      works: ["Spearheaded the development of the company's first React/React Native application, leading a team of developers to ensure timely delivery and cross-platform compatibility.",
        "Collaborated closely with business analysts, UX designers, and backend developers to deliver robust, user-centric solutions.",
        "Mentored new team members, helping them overcome technical challenges and accelerating their onboarding process.",
        "Delivered applications using React, TypeScript, Angular, focusing on scalability and high performance."],
    },
    {
      title: 'React & React Native Developer',
      duration: 'Movadex May 2022 - November 2022 (Contract)',
      works: ["Led the frontend development for the Flocc asset collection app, integrating payment gateways (Stripe) and interactive graphs, enhancing functionality.",
        "Migrated Tailwind CSS components to Chakra UI for an NFT project, improving UI consistency and responsiveness.",],
    },
    {
      title: 'Frontend Developer',
      duration: 'Zookeep December 2022 - December 2023 (Contract)',
      works: [
        "Delivered complex UI components (drag-and-drop, dynamic layouts), improving user experience and engagement.",
        "Conducted code reviews and provided detailed UI/UX feedback, ensuring a high-quality frontend product.",
        "Integrated third-party apps seamlessly, overcoming technical challenges and ensuring a smooth user experience.",
      ],
    },
    {
      title: 'NDA Projects',
      isNda: true,
      nda: [
        {
          duration: 'Shangree-La (Team Lead)',
          works: [
            "Led frontend development for a Bhutanese movie streaming platform, using React and React Native to deliver a cross-platform app (Android, iOS, Web).",
          ],
        }, {
          duration: 'Zhey-Go (Frontend lead)',
          works: [
            "Directed a team of three frontend developers to build a food delivery app using Flutter, delivering both an admin portal and user platforms across web and mobile.",
          ],
        },
        {
          duration: 'EHR (Frontend lead)',
          works: [
            "Developed an EHR system using React and Tailwind CSS, streamlining health records management for medical professionals.",
          ],
        }
      ]
    },
  ];
  
  return (
    experiences.map(({title, duration, works, isNda, nda}) => <Card key={title} header={title} subHeader={duration}
                                                                    points={works} isNda={isNda} nda={nda || []}/>)
  
  )
}

export default Experience;
