import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations("Home");

  return (
    <div className="min-h-screen animate-fade-in mx-8 text-justify">
      <div className="container mx-auto py-8">
        <h1 className="text-5xl font-bold text-white text-center py-4 px-6 rounded-xl shadow-md bg-gradient-to-r from-indigo-700 via-purple-500 to-fuchsia-500 mb-12">
          {t("title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  className="w-80 h-80 rounded-full shadow-2xl shadow-fuchsia-500/30 border-4 border-fuchsia-300/50 object-cover hover:scale-105 transition-transform duration-300"
                  src="/Marianella.jpg"
                  alt="Marianella"
                  width={320}
                  height={320}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-pink-500/20 to-violet-500/20 pointer-events-none"></div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="/portfolio"
                className="text-fuchsia-600 font-semibold hover:underline"
              >
                {t("portfolioLink")} &rarr;
              </a>
            </div>
          </div>
          <div className="text-lg leading-relaxed flex flex-col justify-center">
            <p className="mb-4">{t("paragraph1")}</p>
            <p className="mb-4">{t("paragraph2")}</p>
            <p className="mb-4">{t("paragraph3")}</p>
            <p className="mb-4">{t("paragraph4")}</p>
            <p>
              {t("paragraph5")}{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=marianella.gomezluna@gmail.com&su=Consulta&body=Hola!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-600 font-semibold hover:underline"
              >
                {t("contact")}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
