import api from "./api";

export async function getUsuario() {
   const response = await api.get('/usuario')

   return response.data
}
