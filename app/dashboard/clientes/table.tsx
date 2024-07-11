import { Cliente } from "@/app/lib/definition";
import { Key } from "react";

interface ClientesTableProps {
    clientes: Cliente[];
}

function chunkArray(array: any[], size: number) {
    return array.reduce((acc, _, index) => 
      index % size === 0 ? [...acc, array.slice(index, index + size)] : acc, []);
  }

export default function ClientesTable({ clientes }: ClientesTableProps) {
    return (
        <div className="mt-6 flow-root">
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
          <div>
            {chunkArray(clientes, 2).map((clientePair: Cliente[], index: Key) => (
              <div key={index} className="flex flex-wrap -mx-2">
                {clientePair.map((cliente: Cliente) => (
                  <div
                    key={cliente.id}
                    className="mb-2 w-1/2 px-2 rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{cliente.empresa.nombre}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {cliente.nombre}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Cliente</p>
                        <p className="font-medium">{cliente.cliente}</p>
                      </div>
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Telefono</p>
                      <p className="font-medium">{cliente.telefono}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-b py-5">
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Correo</p>
                      <p className="font-medium">{cliente.correo}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-b py-5">
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Dirección</p>
                      <p className="font-medium">{cliente.direccion}</p>
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Pagina Web</p>
                      <p className="font-medium">{cliente.paginaweb}</p>
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
    )
}