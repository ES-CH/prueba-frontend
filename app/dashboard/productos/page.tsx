import { fetchProductos } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import ProductosTable from "./table";

export default async function ProductosPage() {
    const productos = await fetchProductos();
  
      return (
          <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
              Productos
            </h1>
            {productos !== null && 
              <ProductosTable productos={productos} />
            }
            {productos === null && (
                <div className="flex items-center justify-center h-96">
                  <p className="text-gray-500">No hay productos registrados.</p>
                </div>
              )}
          </div>
  );
}