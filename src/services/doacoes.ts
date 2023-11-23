import api from "./api";

export async function getDoacoes() {
   const response = await api.get('/doacoes/todos')

   return response.data
}
