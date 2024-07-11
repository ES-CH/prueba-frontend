import { MaeFactura } from "@/app/lib/definition";

interface MaeFacturaTableProps {
    maefacturas: MaeFactura[];
}

export default function MaeFacturaTable({ maefacturas }: MaeFacturaTableProps) {
    return (
        <div className="mt-6 flow-root">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                  <div className="md:hidden">
                    {maefacturas?.map((maefactura: MaeFactura) => (
                      <div
                        key={maefactura.id}
                        className="mb-2 w-full rounded-md bg-white p-4"
                      >
                        <div className="flex items-center justify-between border-b pb-4">
                          <div>
                            <div className="mb-2 flex items-center">
                              <div className="flex items-center gap-3">
                                <p>{maefactura.empresa.nombre}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500">
                              {maefactura.numero}
                            </p>
                          </div>
                        </div>
                        <div className="flex w-full items-center justify-between border-b py-5">
                          <div className="flex w-1/2 flex-col">
                            <p className="text-xs">Fecha creacion</p>
                            <p className="font-medium">{maefactura.fehca_creacion}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                    <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                      <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                          Empresa
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                          Numero
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                          Fecha creacion
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Cliente
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Observacion
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Total
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Fecha auditoria
                        </th>
                      </tr>
                    </thead>
    
                    <tbody className="divide-y divide-gray-200 text-gray-900">
                      {maefacturas.map((maedetfactura: MaeFactura) => (
                        <tr key={maedetfactura.id} className="group">
                          <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                            <div className="flex items-center gap-3">
                              <p>{maedetfactura.empresa.nombre}</p>
                            </div>
                          </td>
                          <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                            {maedetfactura.numero}
                          </td>
                          <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                            {maedetfactura.fehca_creacion}
                          </td>
                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                {maedetfactura.cliente.nombre}
                            </td>
                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                {maedetfactura.observaciones}
                            </td>
                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                {maedetfactura.total}
                            </td>
                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                {maedetfactura.fecha_auditoria}
                            </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    )
}