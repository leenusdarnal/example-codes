import Link from 'next/link'

const ProductList = ({ products }) => {
  return (
    <>
      <h1>List of Products </h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`products/${product.id}`}>
              <h2>
                {product.id} {product.title} {product.price}
              </h2>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default ProductList

export const getStaticProps = async () => {
  console.log(`Genetating /Regenerating ProductList`)
  const response = await fetch('http://localhost:4000/products')
  const data = await response.json()
  return { props: { products: data }, revalidate: 10 }
}
