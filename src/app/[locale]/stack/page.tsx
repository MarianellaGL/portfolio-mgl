import Image from "next/image";
import { images } from "../../../../public/images";

const StackPage = () => {
  const imagesArray = [
    { src: images.astro, alt: "Astro" },
    { src: images.bootstrap, alt: "Bootstrap" },
    { src: images.chai, alt: "Chai" },
    { src: images.cssImage, alt: "CSS" },
    { src: images.htmlCinco, alt: "HTML" },
    { src: images.javascriptImage, alt: "JavaScript" },
    { src: images.jest, alt: "Jest" },
    { src: images.jira, alt: "Jira" },
    { src: images.materialUI, alt: "Material UI" },
    { src: images.mocha, alt: "Mocha" },
    { src: images.mongoDB, alt: "MongoDB" },
    { src: images.mysql, alt: "MySQL" },
    { src: images.nextJS, alt: "Next.js" },
    { src: images.nodeJs, alt: "Node.js" },
    { src: images.postgre, alt: "PostgreSQL" },
    { src: images.python, alt: "Python" },
    { src: images.react, alt: "React" },
    { src: images.reactQuery, alt: "React Query" },
    { src: images.styledComponents, alt: "Styled Components" },
    { src: images.tailwindCSS, alt: "Tailwind CSS" },
    { src: images.testingLibrary, alt: "Testing Library" },
    { src: images.typescript, alt: "TypeScript" },
    { src: images.vite, alt: "Vite" },
    { src: images.vitest, alt: "Vitest" },
    { src: images.webpack, alt: "Webpack" },
    { src: images.zustand, alt: "Zustand" },
  ];

  return (
    <div className="min-h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-24 p-4">
      {imagesArray.map((image, index) => (
        <div
          key={index}
          className="relative w-32 h-32 mx-auto rounded-2xl border border-gray-300 bg-white shadow-md overflow-hidden group transition-all duration-300"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain p-4 transition-all duration-300 group-hover:opacity-30"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center text-sm font-bold text-white transition-opacity duration-300"
            style={{
              backgroundImage: `
                radial-gradient(2px 2px at 20px 30px, #ec4899, transparent),
                radial-gradient(2px 2px at 40px 70px, #a21caf, transparent),
                radial-gradient(1px 1px at 90px 40px, #f0abfc, transparent),
                radial-gradient(1px 1px at 130px 80px, #ec4899, transparent),
                radial-gradient(2px 2px at 160px 30px, #a21caf, transparent)
              `,
              backgroundColor: "#000000aa",
            }}
          >
            {image.alt}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackPage;
