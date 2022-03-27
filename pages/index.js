import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import Contactar from "../components/Contactar"
export default function Home() {
  return (
    <div className="mt:8">
      <Cabecera/>
      <AboutMe/>
      <Contactar/>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}