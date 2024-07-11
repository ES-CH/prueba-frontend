import { fetchEmpresas } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import EmpresasTable from "./table";


export default async function EmpresasPage() {
  const empresas = await fetchEmpresas();

    return (
        <div className="w-full">
          <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
            Empresas
          </h1>
          { empresas !== null &&
            <EmpresasTable empresas={empresas} />
          }
          {empresas === null && (
            <div className="flex items-center justify-center h-96">
              <p className="text-gray-500">No hay empresas registradas.</p>
            </div>
          )}
        </div>
      );
    }