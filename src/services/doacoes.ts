import api from "./api";

export async function getDoacoes() {
   const response = await api.get('/doacoes')

   return response.data
}
