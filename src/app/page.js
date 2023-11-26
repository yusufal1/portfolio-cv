import Navbar from "./components/Navbar";
import PageContainer from "./containers/PageContainer";
import Image from 'next/image'
import profileImg from '../../public/img/profil.png'
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <PageContainer>
        <Navbar/>
        <About/>
      </PageContainer>
    </div>
  )
}
