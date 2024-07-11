import { fetchProductos } from "@/app/lib/data";
import { Producto } from "@/app/lib/definition";
import { lusitana } from "@/app/ui/fonts";
import { Key } from "react";

function chunkArray(array: any[], size: number) {
  return array.reduce((acc, _, index) => 
    index % size === 0 ? [...acc, array.slice(index, index + size)] : acc, []);
}

export default async function ProductosPage() {
    const productos = await fetchProductos();
  
      return (
          <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
              Productos
            </h1>
            <div className="mt-6 flow-root">
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
          <div>
            {chunkArray(productos, 2).map((productoPair: Producto[], index: Key) => (
              <div key={index} className="flex flex-wrap -mx-2">
                {productoPair.map((producto: Producto) => (
                  <div
                    key={producto.id}
                    className="mb-2 w-1/2 px-2 rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{producto.empresa.nombre}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {producto.nombre}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Tipo</p>
                        <p className="font-medium">{producto.tipo}</p>
                      </div>
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Fecha_creacion</p>
                      <p className="font-medium">{producto.fecha_creacion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
}