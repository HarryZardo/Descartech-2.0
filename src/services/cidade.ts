import api from "./api";

export async function getCidade() {
   const response = await api.get('/cidades/todos')

   return response.data
}
