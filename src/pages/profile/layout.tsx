import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProfileSideBar } from "../../components/ProfileSideBar";

export const ProfileLayout = () => {
  return (
    <div>
      <Header></Header>
      <div style={{ backgroundColor: '#F2F2F2' }} className="px-32 py-16 flex gap-8">
        <ProfileSideBar></ProfileSideBar>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};
