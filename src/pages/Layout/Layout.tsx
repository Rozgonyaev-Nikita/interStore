import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <main style={{ backgroundColor: "#fafafa" }}>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};
