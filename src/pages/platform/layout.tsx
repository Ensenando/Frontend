import { Outlet, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar";
import { Lection } from "./Lection";

import "./Platform.scss"

export const PlatformLayout = () => {
  const { lectionId } = useParams();

  return (
    <div>
      <Header></Header>
      <div className="Platform w-full flex gap-4 px-40 py-36 box-border">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
