import { fetchDetFacturas } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";
import DetFacturaTable from "./table";


export default async function DetFacturaPage() {
  const detfacturas = await fetchDetFacturas();

    return (
        <div className="w-full">
          <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
            Detalle de Facturas
          </h1>
          <div className="flex justify-end">
            <Link href="/dashboard/detfactura/detfacturaform">
              <button className="flex items-center gap-2 bg-sky-100 text-blue-600 rounded-md p-2 text-sm font-medium hover
              bg-sky-200"              
            >
              Nuevo detalle de factura
            </button>
            </Link>
          </div>
          {detfacturas !== null &&
            <DetFacturaTable detfacturas={detfacturas} />
          }
          {detfacturas === null && (
            <div className="flex items-center justify-center h-96">
              <p className="text-gray-500">No hay detalles de facturas registradas.</p>
            </div>
          )}
        </div>
      );
    }