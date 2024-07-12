'use client'

import { Cliente, Empresa, MaeFactura } from "@/app/lib/definition";
import axios from "axios";
import { useState } from "react";

interface MaeFacturaFormProps {
    empresas: Empresa;
    clientes: Cliente;
    maeFactura?: MaeFactura;
}

export default function MaeFacturaForm({empresas, clientes, maeFactura}: MaeFacturaFormProps) {
    const [formValues, setFormValues] = useState({
      empresa: maeFactura?.empresa.id || '',
      numero: maeFactura?.numero || '',
      fechaCreacion: maeFactura?.fehca_creacion || '',
      cliente: maeFactura?.cliente.id || '',
      observaciones: maeFactura?.observaciones || '',
      total: maeFactura?.total || '',
      fechaAuditoria: maeFactura?.fecha_auditoria || '',
});
  
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!formValues.empresa || !formValues.numero || !formValues.fechaCreacion || !formValues.cliente || !formValues.observaciones || !formValues.total || !formValues.fechaAuditoria) {
          alert('Todos los campos son requeridos');
          return;
        }
        if (maeFactura) {
          try {
            const response = await axios.put(`http://localhost:8000/mae-factura/${maeFactura.id}`, formValues);
            location.href = '/dashboard/maefactura';
          } catch (error) {
            alert('Error al actualizar la factura');
          }
          return;
        }else{
          try {
            const response = await axios.post('http://localhost:8000/mae-factura/', formValues);
            location.href = '/dashboard/maefactura';          
          } catch (error) {
            alert('Error al crear la factura');
          }
        }
        
      };

      return (
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-2xl font-bold mb-6">Crear factura</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <label className="block">
              Empresa:
              <select
                name="empresa"
                value={formValues.empresa}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
              >
                {empresas.map((empresa: Empresa) => (
                  <option key={empresa.id} value={empresa.id}>
                    {empresa.nombre}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              Número:
              <input type="number" name="numero" value={formValues.numero} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
            </label>
            <label className="block">
              Fecha de Creación:
              <input type="date" name="fechaCreacion" value={formValues.fechaCreacion} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
            </label>
            <label className="block">
              Cliente:
              <select name="cliente" value={formValues.cliente} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md">
                    {clientes.map((cliente: Cliente) => (
                    <option key={cliente.id} value={cliente.id}>
                        {cliente.nombre}
                    </option>
                    ))}
                </select>
            </label>
            <label className="block">
              Observaciones:
              <textarea name="observaciones" value={formValues.observaciones} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
            </label>
            <label className="block">
              Total:
              <input type="number" name="total" value={formValues.total} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
            </label>
            <label className="block">
              Fecha de Auditoría:
              <input type="date" name="fechaAuditoria" value={formValues.fechaAuditoria} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
            </label>
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">Enviar</button>
            <button type="button" onClick={() => location.href = '/dashboard/maefactura'} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600">Cancelar</button>
          </form>
        </div>
      )
}
