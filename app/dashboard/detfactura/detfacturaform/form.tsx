'use client'

import { useState } from "react";
import axios from "axios";
import { Empresa, MaeFactura, Producto } from "@/app/lib/definition";

interface DetFacturaFormProps {
    empresas: Empresa;
    facturas: MaeFactura;
    productos: Producto;
}

export default function DetFacturaForm({empresas, facturas, productos}: DetFacturaFormProps) {
    
    const [formValues, setFormValues] = useState({
        empresa: '',
        consecutivo: '',
        id_factura: '',
        id_producto: '',
        cantidad: '',
        precio: '',
        subtotal: '',
      });
    
      const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = async (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          try {
            const response = await axios.post('http://localhost:8000/det-factura/', formValues);
            location.href = '/dashboard/detfactura';          
          } catch (error) {
            alert('Error al crear el detalle factura');
          }
        };
    
      return (
          <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">Crear detalle factura</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <label className="block">
                Empresa:
                <select name="empresa" value={formValues.empresa} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md">
                    {empresas.map((empresa: Empresa) => (
                    <option key={empresa.id} value={empresa.id}>
                        {empresa.nombre}
                    </option>
                    ))}
                </select>
              </label>
              <label className="block">
                  Consecutivo:
                  <input type="number" name="consecutivo" value={formValues.consecutivo} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
              </label>
              <label className="block">
                Factura:
                <select name="id_factura" value={formValues.id_factura} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md">
                    {facturas.map((factura: MaeFactura) => (
                    <option key={factura.id} value={factura.id}>
                        {factura.numero}
                    </option>
                    ))}
                </select>
              </label>
              
              <label className="block">
                  Producto:
                  <select name="id_producto" value={formValues.id_producto} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md">
                        {productos.map((producto: Producto) => (
                        <option key={producto.id} value={producto.id}>
                            {producto.nombre}
                        </option>
                        ))}
                    </select>
              </label>
              <label className="block">
                Cantidad:
                <input type="number" name="cantidad" value={formValues.cantidad} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
              </label>
              <label className="block">
                  Precio:
                  <input type="number" name="precio" value={formValues.precio} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
              </label>
              <label className="block">
                  Subtotal:
                <input type="number" name="subtotal" value={formValues.subtotal} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
              </label>
              <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">Enviar</button>
              <button type="button" onClick={() => location.href = '/dashboard/detfactura'} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600">Cancelar</button>
            </form>
          </div>
        );
    }