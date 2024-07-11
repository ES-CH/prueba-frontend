import { fetchEmpresas, fetchMaeFacturas, fetchProductos } from "@/app/lib/data";
import DetFacturaForm from "./form";



export default async function FacturaFormPage() {
    const empresas = await fetchEmpresas();
    const facturas = await fetchMaeFacturas();
    const productos = await fetchProductos();
  
    return (
        <DetFacturaForm empresas={empresas} facturas={facturas} productos={productos} />
      );
  }