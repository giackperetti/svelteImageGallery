// place files you want to import through the `$lib` alias in this folder.
export async function fetchImages() {
  const res = await fetch('/api/gallery');
  const data = await res.json();
  return data.images;
}
