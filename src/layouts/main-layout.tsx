import { Outlet } from 'react-router-dom';
import SideBar from '../components/sidebar/sidebar';
import Topbar from '../components/topbar/topbar';
import Navbar from '../components/navbar/navbar';

const MainLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <section className="col-span-2">
        <SideBar />
      </section>
      <section className="col-span-10">
        <header>
          <Topbar />
          <Navbar />
        </header>
        <main className="bg-[#DEDEDE] min-h-screen p-4">
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default MainLayout;
