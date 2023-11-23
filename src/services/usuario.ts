import api from "./api";

export async function getUsuario() {
   const response = await api.get('/usuarios/todos')

   return response.data
}
