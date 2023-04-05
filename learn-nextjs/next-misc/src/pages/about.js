import Footer from '../Componets/Footer'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title> Custom Site for Practice</title>
        <meta
          name='description'
          content='practice demo on nextjs custom heading'
        />
      </Head>
      <div className='content'>Content goes here</div>
    </>
  )
}

export default About

About.getLayout = (page) => {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}
