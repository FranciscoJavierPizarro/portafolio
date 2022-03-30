import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
import Proy from "../components/Proy"
import WaterMarkdown from "../components/WaterMarkdown"
export default function Proyectos() {
  return (
    <div className="mt:8">
      <Cabecera className="pl-3.5"/>
      <Proy/>
      <WaterMarkdown/>
    </div>
  )
}

Proyectos.getLayout = function getLayout(page) {
  return <html lang="es"><Layout>{page}</Layout></html>
}