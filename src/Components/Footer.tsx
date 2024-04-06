import Image from "next/image"

export const Footer = () => {
    return (<footer className="bg-gradient-to-r from-violet-300 to-pink-300 py-4 text-white text-center inset-x-0 bottom-0">
        <div className="flex justify-center items-center">
            <Image className="invert" src="/icons8-linkedin.svg" alt="Linkedin" width={40} height={40} />
            <p className="mr-4 ml-4">Agregame a LinkedIn:</p>
            <a
                href="https://www.linkedin.com/in/marianella-gomez-luna/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
            >
                @MarianellaGL
            </a>
        </div>
    </footer>
    )
}