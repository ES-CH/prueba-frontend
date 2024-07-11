import axios from 'axios';


export async function fetchEmpresas() {
  try {
      const response = await axios.get('http://localhost:8000/empresas');
      return response.data;  
  } catch (error) {
    return null;
  }
}

export async function fetchClientes() {
  try {
    const response = await axios.get('http://localhost:8000/clientes');
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function fetchProductos() {
  try {
    const response = await axios.get('http://localhost:8000/productos');
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function fetchDetFacturas() {
  try {
    const response = await axios.get('http://localhost:8000/det-factura');
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function fetchMaeFacturas() {
  try {
    const response = await axios.get('http://localhost:8000/mae-factura');
    return response.data;
  } catch (error) {
    return null;
  }
}
