import { useRouter } from 'next/router'

const ReviewDetails = () => {
  const router = useRouter()
  const productId = router.query.productId
  const reviewId = router.query.reviewId
  return (
    <>
      <h1>ReviewDetails page</h1>
      <h2>
        Review Id={reviewId} Product Id={productId}
      </h2>
    </>
  )
}

export default ReviewDetails
