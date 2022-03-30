import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
import Tecnologias from "../components/Tecnologias"
import WaterMarkdown from "../components/WaterMarkdown"
export default function Conocimientos() {
  return (
    <div className="mt-4 sm:mt:8">
      <Cabecera/>
      <Tecnologias/>
      <WaterMarkdown/>
    </div>
  )
}

Conocimientos.getLayout = function getLayout(page) {
  return <html lang="es"><Layout>{page}</Layout></html>
}