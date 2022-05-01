import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
import Proy from "../components/Proy"
import WaterMarkdown from "../components/WaterMarkdown"
export default function Proyectos() {
  return (
    <div className="mt-4 sm:mt:8">
      <Cabecera className=""/>
      <Proy/>
      <WaterMarkdown/>
    </div>
  )
}

Proyectos.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}