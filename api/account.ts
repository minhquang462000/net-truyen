import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getAccount = async (name: string) => {
  try {
    const res = await axios.get(`${API_URL}/api/client/users/${name}`);
    return res.data;
  } catch (e) {
    return null;
  }
};