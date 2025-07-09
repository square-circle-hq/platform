export async function lister(url: string) {
  return await fetch(url).then((res) => res.json());
}
