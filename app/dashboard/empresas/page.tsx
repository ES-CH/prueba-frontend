import { fetchEmpresas } from "@/app/lib/data";
import { Empresa } from "@/app/lib/definition";
import { lusitana } from "@/app/ui/fonts";


export default async function EmpresasPage() {
  const empresas = await fetchEmpresas();

    return (
        <div className="w-full">
          <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
            Empresas
          </h1>
          { empresas !== null &&
            <div className="mt-6 flow-root">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                  <div className="md:hidden">
                    {empresas?.map((empresa: Empresa) => (
                      <div
                        key={empresa.id}
                        className="mb-2 w-full rounded-md bg-white p-4"
                      >
                        <div className="flex items-center justify-between border-b pb-4">
                          <div>
                            <div className="mb-2 flex items-center">
                              <div className="flex items-center gap-3">
                                <p>{empresa.empresa}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500">
                              {empresa.nombre}
                            </p>
                          </div>
                        </div>
                        <div className="flex w-full items-center justify-between border-b py-5">
                          <div className="flex w-1/2 flex-col">
                            <p className="text-xs">Estado</p>
                            <p className="font-medium">{empresa.estado}</p>
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
                          Nombre
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                          Estado
                        </th>
                      </tr>
                    </thead>
    
                    <tbody className="divide-y divide-gray-200 text-gray-900">
                      {empresas.map((empresa: Empresa) => (
                        <tr key={empresa.id} className="group">
                          <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                            <div className="flex items-center gap-3">
                              <p>{empresa.empresa}</p>
                            </div>
                          </td>
                          <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                            {empresa.nombre}
                          </td>
                          <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                            {empresa.estado}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>}
          {empresas === null && (
            <div className="flex items-center justify-center h-96">
              <p className="text-gray-500">No hay empresas registradas.</p>
            </div>
          )}
        </div>
      );
    }