import axios from "axios";
import { Response } from "../types/Response.types";

export const fetchUsers = () => {
  return axios.get<Response.GetUsers>("https://demo4780686.mockable.io/users");
};
