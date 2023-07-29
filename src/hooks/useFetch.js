import useSWR from "swr";
import api from "../services/config";

export function useFetch(url) {
  const { data, error } = useSWR(
    url,
    async (url) => {
      const response = await api.get(url);

      return response.data;
    },
    { refreshInterval: 500 }
  );

  return { data, error };
}
