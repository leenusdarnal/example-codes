import Link from 'next/link'

const Product = ({ productId = 100 }) => {
  return (
    <>
      <Link href='/'>Home</Link>
      <h1>Product Page</h1>
      <h2>
        <Link href='/product/1'>Product 1</Link>
      </h2>
      <h2>
        <Link href='/product/2'>Product 2</Link>
      </h2>
      <h2>
        <Link href='/product/2'>Product 3</Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  )
}

export default Product
