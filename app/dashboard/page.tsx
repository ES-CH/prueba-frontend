import { lusitana } from "../ui/fonts"

export default async function DashboardPage() {
    return(
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <p className="text-base md:text-lg">
                Este proyecto fue creado utilizando <strong>Next.js</strong>, <strong>Axios</strong> para las solicitudes HTTP, y <strong>Tailwind CSS</strong> para el diseño.
            </p>
        </main>
    )
}