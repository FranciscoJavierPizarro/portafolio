import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
import Tecnologias from "../components/Tecnologias"
export default function Conocimientos() {
  return (
    <div className="mt:8">
      <Cabecera/>
      <Tecnologias/>
    </div>
  )
}

Conocimientos.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}