import { fetchMaeFacturas } from "@/app/lib/data";
import { MaeFactura } from "@/app/lib/definition";
import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";
import MaeFacturaTable from "./table";


export default async function MaeFacturaPage() {
  const maefacturas = await fetchMaeFacturas();

    return (
        <div className="w-full">
          <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
            Facturas
          </h1>
          <div className="flex justify-end">
            <Link href="/dashboard/maefactura/facturaform">
              <button className="flex items-center gap-2 bg-sky-100 text-blue-600 rounded-md p-2 text-sm font-medium hover
              bg-sky-200"              
            >
              Nueva factura
            </button>
            </Link>
          </div>
          { maefacturas !== null &&
            <MaeFacturaTable maefacturas={maefacturas} />
          }
          {maefacturas === null && (
            <div className="flex items-center justify-center h-96">
              <p className="text-gray-500">No hay facturas registradas.</p>
            </div>
          )}
        </div>
      );
    }