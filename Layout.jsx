
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'

//Outlet i use becuse of header and footer will remnai same middle order thing change like Home, about, contact

const Layout = () =>  {
  return (
    <>
    <Header />
    <Outlet />   
    <Footer />
    </>
  );
}

export default Layout