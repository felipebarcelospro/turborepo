export async function getArticle() {
  const response = await fetch("http://localhost:1337/api/articles");
  const data = await response.json();
  return data.data[0];
}