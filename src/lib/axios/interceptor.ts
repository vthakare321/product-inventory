import type { AxiosError, InternalAxiosRequestConfig } from "axios";

import { client } from "./client";

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Later we'll attach auth token here.
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

client.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);