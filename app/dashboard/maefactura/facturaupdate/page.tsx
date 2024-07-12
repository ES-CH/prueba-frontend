import { fetchClientes, fetchEmpresas, fetchFacturaById } from "@/app/lib/data";
import MaeFacturaForm from "../facturaform/form";

export default async function FacturaUpdatePage() {
    const maeFactura = await fetchFacturaById();
    const empresas = await fetchEmpresas();
    const clientes = await fetchClientes();
    return (
        <h1>
            <MaeFacturaForm empresas={empresas} clientes={clientes} maeFactura={maeFactura}/>
        </h1>
    );
}