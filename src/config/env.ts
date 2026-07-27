
const {
  VITE_APP_NAME,
  VITE_API_URL,
  VITE_API_TIMEOUT,
} = import.meta.env;

if (!VITE_API_URL) {
  throw new Error("VITE_API_URL is missing.");
}

export const env = {
  appName: VITE_APP_NAME ?? "Inventory Management",
  apiUrl: VITE_API_URL,
  apiTimeout: Number(VITE_API_TIMEOUT) || 10000,
} as const;