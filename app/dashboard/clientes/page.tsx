import { fetchClientes } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import ClientesTable from "./table";




export default async function ClientesPage() {
  const clientes = await fetchClientes();

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Clientes
      </h1>          
    { clientes !== null && 
      <ClientesTable clientes={clientes} />
    }
    {clientes === null && (
      <div className="flex items-center justify-center h-96">
          <p className="text-gray-500">No hay clientes registrados.</p>
      </div>
    )}
    </div>
  );
}