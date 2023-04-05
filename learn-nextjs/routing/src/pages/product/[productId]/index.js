import { useRouter } from 'next/router'

const ProductDetails = () => {
  const router = useRouter()
  const productId = router.query.productId
  return (
    <>
      <h1>Product Details Page </h1>
      <h2>Product Number - {productId} </h2>
    </>
  )
}

export default ProductDetails
