import Image from "next/image";
import { images } from '../../../public/images'

const StackPage = () => {

    const imagesArray = [
        { src: images.cssImage, alt: 'CSS' },
        { src: images.javascriptImage, alt: 'JavaScript' },
        { src: images.nodeJsImage, alt: 'Node.js' },
        { src: images.nextJS, alt: 'NextJS' },
        { src: images.materialUI, alt: "Tailwind css" },
        { src: images.bootstrap, alt: "Bootstrap" },
        { src: images.jest, alt: "Jest" },
        { src: images.htmlCinco, alt: "HTML" },
        { src: images.typescript, alt: "Typescript" },
        { src: images.react, alt: "React" },
        { src: images.jira, alt: "Jira" },
        { src: images.vite, alt: "vite" },
        { src: images.mongoDB, alt: "mongoDB" },
        { src: images.mysql, alt: "Mysql" },
        { src: images.java, alt: "java" },
        { src: images.spring, alt: "springboot" }
    ];


    return (<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-24">
        {imagesArray.map((image, index) => (
            <div key={index} className="bg-white-200 p-4 flex justify-center items-center">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={100}
                    className="rounded-full"
                />
            </div>
        ))}
    </div>);
}

export default StackPage;