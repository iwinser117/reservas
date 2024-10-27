"use client";
import Nav from "@/app/components/Nav/Nav";
import Footer from "@/app/components/Footer/Footer";
import ContainerFilter from "@/app/components/filter/ContainerFilter";
import Promociones from "@/app/containers/Promociones";
import Filtro from "@/app/containers/FiltroResults";
const HomeView = () => {
  return (
    <container>
      <Nav />
      <ContainerFilter />
      <Promociones />
      <Filtro />
      <Footer />
    </container>
  );
};
export default HomeView;
