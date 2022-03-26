import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
import Contactar from "../components/Contactar"
export default function Contacto() {
  return (
    <div className="items-center mt:8">
      <Cabecera/>
      <Contactar/>
    </div>
  )
}

Contacto.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}