export async function lister(path: string, { arg }: { arg?: string }) {
  return await fetch(`${process.env.API_BASE_URL}${path}${arg}`, {
    method: "GET",
  });
}
