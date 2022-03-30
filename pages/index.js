import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import Contactar from "../components/Contactar"
import WaterMarkdown from "../components/WaterMarkdown"
export default function Home() {
  return (
    <div className="mt:8">
      <Cabecera/>
      <AboutMe/>
      <Contactar/>
      <WaterMarkdown/>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <html lang="español"><Layout>{page}</Layout></html>
}