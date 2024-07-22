import fs from 'fs';
import path from 'path';

export async function GET() {
  const galleryPath = path.resolve('static/gallery');
  const files = fs.readdirSync(galleryPath);

  const images = files.map(file => ({
    id: file,
    src: `/gallery/${file}`
  }));

  return new Response(JSON.stringify({ images }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
