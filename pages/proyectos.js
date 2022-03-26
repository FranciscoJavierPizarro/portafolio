import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
export default function Proyectos() {
  return (
    <div className="mx-auto w-1/2 content-center items-center mt:8">
      <Cabecera/>
      <img src="wp.png"/>
    </div>
  )
}

Proyectos.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}