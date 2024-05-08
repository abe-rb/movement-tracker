import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Task } from "../types/Task";

async function fetchTasksByNip(nip: string[8]): Promise<Task[]> {
  const data = await axios.get(import.meta.env.VITE_BACKEND_URL + nip);
  return data.data.tasks;
}

export function useTasks(nip: string[8]) {
  return useQuery({
    queryKey: ["tasks", nip],
    queryFn: () => fetchTasksByNip(nip),
  });
}
