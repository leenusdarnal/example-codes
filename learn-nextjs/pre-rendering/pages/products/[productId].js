import { useRouter } from 'next/router'

const Product = ({ product }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading....</h1>
  }
  return (
    <>
      <h2>
        ID-{product.id} :Title-{product.title} Price : {product.price}
      </h2>
      <hr />
      <p>{product.description}</p>
    </>
  )
}

export default Product

export const getStaticProps = async (context) => {
  const { params } = context
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  )
  console.log(`Regenrationg for ${params.productId}`)
  const data = await response.json()
  if (!data.id) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  }
}
export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:4000/products')
  const data = await response.json()
  // const paths = data.map((product) => {
  //   return {
  //     params: {
  //       productId: `${product.id}`,
  //     },
  //   }
  // })
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true,
  }
}
