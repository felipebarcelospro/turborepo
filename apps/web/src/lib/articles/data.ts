import { Article } from '../../types/Article'

export async function getArticle(): Promise<Article> {
  const response = await fetch('http://localhost:1337/api/articles')
  const data = await response.json()
  return data.data[0]
}
