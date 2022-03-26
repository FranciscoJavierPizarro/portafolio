import Cabecera from "../components/Cabecera"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
export default function Home() {
  return (
    <div className="items-center mt:8">
      <Cabecera/>
      <AboutMe/>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}