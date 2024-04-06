import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen animate-fade-in mx-8 text-justify">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-violet-400 inline-block text-transparent bg-clip-text">Bienvenido a mi mundo digital</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <Image
                className="w-80 rounded-full shadow-lg"
                src="/Marianella.jpg"
                alt="Marianella"
                width={300}
                height={300}
              />
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/portfolio"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Ver mi portfolio completo &rarr;
              </a>
            </div>
          </div>
          <div className="text-lg leading-relaxed flex flex-col justify-center">
            <p className="mb-4">
              ¡Hola! Soy una apasionada desarrolladora de software con más de cuatro años de experiencia en el campo del desarrollo web. Mi enfoque principal se encuentra en el desarrollo frontend habiendo incursionado en React y Next Js. También he trabajado con tecnologías líderes como el resto del stack MERN (MongoDB, Express, React y Node.js) y NestjS.
            </p>
            <p className="mb-4">
              Constantemente busco nuevos desafíos y me mantengo al día con las últimas tendencias y tecnologías en el mundo del desarrollo web. Disfruto especialmente trabajando en proyectos creativos y colaborativos que desafían mis habilidades y conocimientos.
            </p>
            <p className="mb-4">
              Además de mi experiencia profesional, también soy una activa defensora de la diversidad y la inclusión en la industria tecnológica. He tenido el honor de ser mentora en MET (Mujeres en Tecnología), donde contribuí al empoderamiento de mujeres en tech. Actualmente, comparto mis conocimientos como docente en Coderhouse, enseñando tecnologías como React a la próxima generación de desarrolladores.
            </p>
            <p className="mb-4">
              Como profesional independiente, he participado en diversos proyectos, incluyendo la co-creación de Pricely, una aplicación de comparación de precios para supermercados, desarrollada con React Native para mobile y Next.js en el frontend.
            </p>
            <p>
              Estoy emocionada por seguir creciendo y construyendo soluciones innovadoras. ¿Tienes un proyecto interesante en mente o simplemente quieres hablar de tecnología? ¡No dudes en ponerte en contacto conmigo!
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
