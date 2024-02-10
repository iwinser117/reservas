'use client'
import Nav from "@/app/components/Nav/Nav";
import Footer from "@/app/components/Footer/Footer";
import Banner from "@/app/components/Banner/Banner";
import ContainerFilter from "@/app/components/filter/ContainerFilter";
const HomeView = () => {
  return (
    <container >
      <Nav/>
      <ContainerFilter/>
      <Banner/>
      <Footer/>
    </container>
  );
};
export default HomeView;
