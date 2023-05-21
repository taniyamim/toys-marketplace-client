import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Gallery from "../Gallery/Gallery";
import GalleryFl from "../GalleryFl/GalleryFl";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <div className="mx-auto w-3/4">
                
                <div className="my-7" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <Banner></Banner>
                </div>
                {/* <Gallery></Gallery> */}
                <div className="my-5" data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector"><GalleryFl></GalleryFl></div>
               
                <div className="my-7">
                    <ShopByCategory></ShopByCategory>
                </div>
                <div>
                    <AboutUs></AboutUs>
                </div>
                <div className="my-8">
                    <FAQ></FAQ>
                </div>
            </div>
        </div>
    );
};

export default Home;