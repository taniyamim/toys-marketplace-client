import React from 'react';

const Banner = () => {
    return (
        <div className='h-1/4'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg" className="w-full" />
                </div>
               
                <div id="item2" className="carousel-item w-full">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/dc-movies-in-order-05-justice-league-1608143609.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://c4.wallpaperflare.com/wallpaper/947/702/550/daredevil-marvel-comics-wallpaper-preview.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://www.pixelstalk.net/wp-content/uploads/images6/4K-Star-Wars-HD-Wallpaper-Free-download.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;