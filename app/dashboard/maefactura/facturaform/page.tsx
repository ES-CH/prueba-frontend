import { fetchClientes, fetchEmpresas } from "@/app/lib/data";
import MaeFacturaForm from "./form";


export default async function FacturaFormPage() {
  const empresas = await fetchEmpresas();
  const clientes = await fetchClientes();
  
    return (
        <MaeFacturaForm empresas={empresas} clientes={clientes} />
      );
  }