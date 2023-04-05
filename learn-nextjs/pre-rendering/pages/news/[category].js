const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>List of Articles - {category}</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default ArticleListByCategory

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context
  // console.log(req.headers.cookie)
  // console.log(query)
  // res.setHeader('Set-Cookie', ['name=LeenusDarnal'])
  const { category } = params
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  )
  const data = await response.json()
  console.log(`preRendering News Article for category-:${category}`)
  return {
    props: {
      articles: data,
      category,
    },
  }
}
