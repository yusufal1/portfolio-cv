import Navbar from "./components/Navbar";
import PageContainer from "./containers/PageContainer";
import Image from 'next/image'
import profileImg from '../../public/img/profil.png'
import About from "./components/About";
import Resume from "./components/Resume";
import Home from "./components/Home";

export default function Page() {
  return (
    <div>
      <PageContainer>
        <Home/>
      </PageContainer>
    </div>
  )
}
