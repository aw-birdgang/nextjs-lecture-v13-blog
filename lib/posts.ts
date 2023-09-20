import {readFile} from "node:fs/promises";

export async function getPost(slug) {
  const data = await readFile(`content/posts/${slug}.json`, 'utf8');
  return JSON.parse(data);
}
