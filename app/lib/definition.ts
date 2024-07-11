export type Empresa = {
    id: number;
    empresa: string;
    nombre: string;
    estado: string;
};

export type Cliente = {
    id: number;
    empresa: Empresa;
    cliente: number;
    tipo: string;
    nombre: string;
    telefono: string;
    correo: string;
    direccion: string;
    paginaweb: string;
    fecha_creacion: string;
    estado: string;
};

export type Producto = {
    id: number;
    empresa: Empresa;
    producto: number;
    nombre: string;
    tipo: string;
    fecha_creacion: string;
    estado: string;
};

export type MaeFactura = {
    id: number;
    empresa: Empresa;
    numero: number;
    fehca_creacion: string;
    cliente: Cliente;
    observaciones: string;
    total: number;
    fecha_auditoria: string;
};

export type DetFactura = {
    id: number;
    empresa: Empresa;
    consecutivo: number;
    id_factura: MaeFactura;
    id_producto: Producto;
    cantidad: number;
    precio: number;
    subtotal: number;
}