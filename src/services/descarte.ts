import api from "./api";

export async function getDescarte() {
   const response = await api.get('/descarte')

   return response.data
}
