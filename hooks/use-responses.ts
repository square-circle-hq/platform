import useSWR from "swr";
import { lister } from "@/lib/fetchers";

export function useResponses(params?: string) {
  return useSWR(["/v1/reposnses", params], lister);
}
