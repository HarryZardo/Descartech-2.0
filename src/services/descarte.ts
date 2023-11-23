import api from "./api";

export async function getDescarte() {
   const response = await api.get('/descartes/todos')

   return response.data
}
