import { useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Gallery from "../Gallery/Gallery";
import GalleryFl from "../GalleryFl/GalleryFl";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from "../hooks/UseTitle";

const Home = () => {
    useTitle('Home')
    useEffect(() => {
        AOS.init();
    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);
    return (
        <div>
            <div className="mx-auto w-3/4">
                
                <div data-aos="flip-up">
                <Banner></Banner>
                </div>
                {/* <Gallery></Gallery> */}
                <div className="my-5" data-aos="fade-down" ><GalleryFl></GalleryFl></div>
               
                <div className="my-7">
                    <ShopByCategory></ShopByCategory>
                </div>
                <div data-aos="flip-left" data-aos-delay="100">
                    <AboutUs></AboutUs>
                </div>
                <div className="my-8" data-aos="zoom-in-down">
                    <FAQ></FAQ>
                </div>
                
                
            </div>
        </div>
    );
};

export default Home;