import Image from 'next/image'

const PetsPage = ({ title }) => {
  console.log(title)
  return (
    <div
    // style={{
    //   display: 'flex',
    //   flexDirection: 'row',
    // }}
    >
      {['1', '2', '3', '4', '5'].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/images/${path}.jpg`}
              alt='pets'
              width='280'
              height='420'
            />
          </div>
        )
      })}
    </div>
  )
}

export default PetsPage

export const getServerSideProps = () => {
  const user = process.env.DB_USER
  const pass = process.env.DB_PASSWORD
  console.log(user, pass)

  return {
    props: {
      title: 'hello',
    },
  }
}
