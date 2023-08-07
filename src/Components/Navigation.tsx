"use client"
import Link from "next/link";

export const Navigation: React.FC = () => {

    const links = [
        {
            label: "home",
            route: "/",
        },
        {
            label: "about",
            route: "/about",
        },
        {
            label: "portfolio",
            route: "/portfolio"
        },
        {
            label: "stack",
            route: "/stack"
        }
    ];


    return (<header >
        <nav className="flex items-center justify-between flex-wrap bg-indigo-600 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Marianella Gomez Luna</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center">
                <ul >
                    {links.map(({ label, route }) => (
                        <li key={route} className="block mt-4 lg:inline-block lg:mt-0 text-white mr-6">
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="bg-transparent hover:bg-indigo-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded text-white"> <a
                href="/mi_cv.pdf"
                download="mi_cv.pdf">Descargar CV</a></button>
        </nav>
    </header>)
};