import axios from "axios";

import { env } from "@/config/env";

export const client = axios.create({
  baseURL: env.apiUrl,
  timeout: env.apiTimeout,
  headers: {
    "Content-Type": "application/json",
  },
});