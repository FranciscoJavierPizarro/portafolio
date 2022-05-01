import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import Contactar from "../components/Contactar"
import WaterMarkdown from "../components/WaterMarkdown"
export default function Home() {
  return (
    <div className="mt-4 sm:mt:8">
      <Cabecera/>
      <AboutMe/>
      <Contactar/>
      <WaterMarkdown/>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}