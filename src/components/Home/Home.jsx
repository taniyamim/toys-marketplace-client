import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import GalleryFl from "../GalleryFl/GalleryFl";

const Home = () => {
    return (
        <div>
            <div className="mx-auto w-3/4">
                <div className="my-7">
                    <Banner></Banner>
                </div>
                {/* <Gallery></Gallery> */}
                <div className="my-5">
                    <GalleryFl></GalleryFl>
                </div>
            </div>
        </div>
    );
};

export default Home;