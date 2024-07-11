import axios from 'axios';


export async function fetchEmpresas() {
  try {
      const response = await axios.get('http://localhost:8000/empresas');
      return response.data;  
  } catch (error) {
    throw new Error('Failed to fetch empresas.');
  }
}

export async function fetchClientes() {
  try {
    const response = await axios.get('http://localhost:8000/clientes');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch clientes.');
  }
}

export async function fetchProductos() {
  try {
    const response = await axios.get('http://localhost:8000/productos');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch productos.');
  }
}

export async function fetchDetFacturas() {
  try {
    const response = await axios.get('http://localhost:8000/det-factura');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch detfacturas.');
  }
}

export async function fetchMaeFacturas() {
  try {
    const response = await axios.get('http://localhost:8000/mae-factura');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch detfacturas.');
  }
}
