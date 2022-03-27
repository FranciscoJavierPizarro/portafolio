import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
import Proy from "../components/Proy"
export default function Proyectos() {
  return (
    <div className="mt:8">
      <Cabecera/>
      <Proy/>
    </div>
  )
}

Proyectos.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}