import Image from 'next/image'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-600">¡Hola, soy Marianella!</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <Image
                className="w-80 h-80 rounded-full shadow-lg"
                src="/marianella.jpeg"
                alt="Marianella"
                width={300}
                height={300}
              />
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/portfolio"
                className="text-blue-600 font-semibold hover:underline"
              >
                Ver mi portafolio completo &rarr;
              </a>
            </div>
          </div>
          <div className="text-lg leading-relaxed flex flex-col justify-center">
            <p className="mb-4">
              Soy una apasionada software developer con más de 3 años de experiencia en el desarrollo web utilizando el stack MERN (MongoDB, Express, React y Node.js). Siendo mi punto más fuerte el desarrollo frontend.
            </p>
            <p className="mb-4">
              Siempre estoy en búsqueda de nuevos desafíos y aprendiendo sobre las últimas tecnologías del mundo del desarrollo web. Disfruto trabajando en proyectos creativos y colaborativos.
            </p>
            <p className="mb-4">
              He tenido la oportunidad de ser mentora en MET (Mujeres en Tecnología), donde fomenté el empoderamiento y la inclusión en la industria tech. Actualmente, soy docente en Coderhouse, enseñando la tecnología de React a nuevos desarrolladores.
            </p>
            <p className="mb-4">
              También soy co-creadora de Pricely, una aplicación de comparación de precios en cadenas de supermercados, escrita en React Native en su frontend.
            </p>
            <p>
              ¡Me emociona la posibilidad de seguir creciendo y construyendo soluciones innovadoras! No dudes en contactarme si deseas colaborar en un proyecto o simplemente charlar sobre el mundo de la tecnología.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
