import api from "./api";

export async function getDoacoesquem() {
   const response = await api.get('/doacoesquem')

   return response.data
}
