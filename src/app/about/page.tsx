import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="animate animate-fade-in">
            <div className="container mx-auto py-8">
                <h1 className="text-indigo-600 text-4xl font-bold mb-4 ml-10 mr-10" style={{ animationDuration: '1s' }}>
                    Acerca de...
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ml-10 mr-10">
                    <div className="text-lg leading-relaxed">
                        <p className="mb-4">
                            Mi presentación quizás queda un poco corta cuando se trata de hablar de mi experiencia. Empecé por el año 2019 a programar. Previo a eso me había egresado como locutora en ISER, con lo cual poseo grandes habilidades comunicativas y de expresión.
                        </p>
                        <p className="mb-4">
                            Empecé a programar por una necesidad y esa necesidad se transformó en pasión, al principio en el mundo del Backend, con Java y Springboot y después en el mundo del Frontend con Javascript, Typescript y React.
                        </p>
                        <p className="mb-8">
                            Actualmente, estoy cursando la tecnicatura de desarrollo de software en Istea, lo cual me permite profundizar mis conocimientos en este apasionante mundo.
                        </p>
                        <Image src="/giphy.gif" width={320} height={370} alt="coding" />
                    </div>
                    <div className="text-lg leading-relaxed">
                        <p className="mb-4">
                            Y hablando de experiencia laboral, empecé el 2020 ingresando a Mercado Libre, allí me desempeñé seis meses como desarrolladora Backend, creando un potente administrador de retenciones. Luego cambié al Frontend, generando nuevas soluciones y administradores internos para la empresa por más de dos años.
                        </p>
                        <p className="mb-4">
                            En 2022 decidí afrontar un nuevo reto y migré a Adviters, una software factory en donde creé soluciones para Banco Comafi, programando principalmente en React y algo de Java. Actualmente me desempeño como programadora para un proyecto de Fundación Huesped.
                        </p>
                        <p className="mb-4">
                            Me encuentro en 2024 aguardando nuevos retos y afrontando también continuando interiorizándome en el desafío de la docencia, algo que siempre quise hacer y que poco a poco estoy descubriendo.
                        </p>
                        <p className="mb-4">
                            Además de mi amor por la programación, tengo otros hobbies que me ayudan a relajarme después de un largo día laboral, como la pintura y el dibujo. Me apasiona mucho el arte y lo veo como una veta creativa para luego poder desarrollar mejor.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ml-10 mr-10">
                    <div>
                        <h1 className="font-bold mb-4  underline text-xl text-indigo-600">Experiencia Laboral</h1>
                        <p className="mb-4 font-semibold">De 2020-2022 - Mercado Libre SRL</p>
                        <p className="mb-4 font-semibold">Experiencia:</p>
                        <ul className="list-disc">
                            <li className="mb-4">Creación de administrador de retenciones con Java que supuso una manera más automatizada de poder generar retenciones a los usuarios.</li>
                            <li className="mb-4">Desarrollo de un nuevo proyecto de comunicaciones para los usuarios morosos. También bajo el mismo proyecto trabajé en el maquetado de nuevos correos electrónicos que llegaron a miles de usuarios.</li>
                            <li className="mb-4">Armado de prototipos en AdobeXD para administradores internos, con propuesta documentada y posterior aplicación en desarrollo.</li>
                            <li className="mb-4">Manejo de bases de datos relacionales para el proyecto de mailing, con el objeto de monitorear que estuvieran correctamente recibiendo los datos desde el backend.</li>
                            <li className="mb-4">Creación de administradores internos con React Js, un histórico de usuarios morosos, el cual fue una refactorización de un código ya obsoleto, permitiendo así optimizar la performance de la aplicación.</li>
                            <li className="mb-4">Armado de diseños en Adobe XD para nuevos diseños de administradores.</li>
                            <li className="mb-8">Realicé bug fixing logrando en tiempo record poder solucionar bugs que eran reportados casi al instante, mejorando así la sección de facturación para el usuario final en la aplicación MercadoLibre.</li>
                        </ul>
                        <p className="mb-4 font-semibold">De 2022-Presente - Adviters</p>
                        <p className="mb-4 font-semibold">Experiencia:</p>
                        <ul className="list-disc">
                            <li className="mb-4">Agregué nuevas features a Tenencias, producto de manejo interno de Banco Comafi, adaptado al uso de CRM sobre Dynamics 365, por medio del desarrollo de aplicaciones React js logrando una llegada a una cantidad significativa de usuarios.</li>
                            <li className="mb-4">Reduje significativamente la cantidad de código en los proyectos de frontend, a través de un service de mocks implementado para uso interno del equipo de desarrollo.</li>
                            <li className="mb-4">Para uso interno del Banco, trabajo en un nuevo motor hecho en Typescript que permite procesar los distintos dictámenes crediticios de los clientes.</li>
                            <li className="mb-4">Armado de diagrama de componentes para posterior visualización en la interfaz del usuario.</li>
                            <li className="mb-4">Para uso interno del banco, creamos nueva arquitectura que maneja las solicitudes para altas de nuevos productos financieros emitidas por los operadores, en esta tarea desarrollé parte de los endpoints y los test en Java. Una vez implementada automatizará el proceso de creación de nuevas solicitudes.</li>
                            <li className="mb-4">Trabajé sobre un sistema de turnos para Fundación Huesped, haciendo bug fixing en tiempo record.</li>
                            <li className="mb-4">Armado de diseños en Figma para implementación de nuevas features.</li>
                            <li className="mb-4">Agregado de nuevas features al sistema turnos, una migración de Angular a React.</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold mb-4  underline text-xl text-indigo-600">Experiencia como Docente</h1>
                        <p className="mb-4 font-semibold">De 2023-Presente - Coderhouse</p>
                        <p className="mb-4 font-semibold">Experiencia:</p>
                        <ul className="list-disc">
                            <li className="mb-4">Enseñanza de React Js desde sus bases, impartiendo conocimientos teóricos y prácticos para el desarrollo de aplicaciones web.</li>
                            <li className="mb-4">Conexión de React Js con Firebase para implementar una arquitectura serverless en las aplicaciones desarrolladas.</li>
                            <li className="mb-4">Diseño y desarrollo de material didáctico para facilitar el aprendizaje de los estudiantes.</li>
                            <li className="mb-4">Evaluación del progreso de los estudiantes y brindar retroalimentación constructiva.</li>
                        </ul>
                        <h1 className="font-bold mb-4  underline text-xl text-indigo-600">Experiencia Freelance</h1>
                        <p className="mb-4 font-semibold">Pricely</p>
                        <p className="mb-4 font-semibold">Experiencia:</p>
                        <ul className="list-disc">
                            <li className="mb-4">Desarrollo de una web en Next.js para Pricely, una plataforma que compara productos de supermercados. Implementación de un sistema de comparación de precios y productos.</li>
                            <li className="mb-4">Desarrollo del historial y listado de productos para la aplicación móvil de Pricely, utilizando React Native.</li>
                            <h1 className="font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-violet-400 inline-block text-transparent bg-clip-texttext-4xl font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-violet-400 inline-block text-transparent bg-clip-text">-------{">"}<Link href='https://pricely.ar'>Pricely</Link>{'<'}-------</h1>
                        </ul>
                        <p className="mb-4 font-semibold">Palo Santo</p>
                        <p className="mb-4 font-semibold">Experiencia:</p>
                        <ul className="list-disc">
                            <li className="mb-4">Desarrollo de un sitio web para Palo Santo, un complejo de cabañas, utilizando Next.js. Implementación de un sistema de backoffice para el control de clientes y la subida de imágenes a la galería y carrousel.</li>
                            <h1 className="font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-violet-400 inline-block text-transparent bg-clip-text">-------{">"}<Link href='https://palosantoapartments.com.ar'>Palo Santo</Link>{'<'}-------</h1>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;