
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const handleUpdateView = async (id: string) => {
  try {
    await axios.post(`${API_URL}/api/client/books-views/${id}`);
  } catch (e) {
    console.log(e);
  }
}