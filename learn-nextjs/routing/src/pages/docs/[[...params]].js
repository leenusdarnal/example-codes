import { useRouter } from 'next/router'

const Doc = () => {
  const router = useRouter()
  const { params = [] } = router.query

  return <h1>Docs Home Page params - {params}</h1>
}

export default Doc
