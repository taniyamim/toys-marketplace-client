import React from 'react';

const GalleryFl = () => {
    return (
        <div>
            <h1 className='text-center font-bold py-10 text-3xl dark:text-white'>Photo Gallery</h1>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://bbts1.azureedge.net/site-images/p/2023/03/9f306334-79ce-43a0-9888-07b8bafda760.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://m.media-amazon.com/images/I/51VuYRPeloL._AC_.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/originals/b2/ff/02/b2ff020a299e78c92fe626a0221d3517.jpg" alt=""/>
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images-na.ssl-images-amazon.com/images/I/61JkzF2JkML._AC_UL600_SR600,600_.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://dccollectibleshunter.files.wordpress.com/2017/01/batman-arkham-asylum-4-pack-the-joker-harley-quinn-batman-the-scarecrow.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://bbts1.azureedge.net/site-images/p/2021/11/4247c3b5-bedc-441e-967d-9df147298101.jpg" alt=""/>
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://dragonschesttoys.com/wp-content/uploads/2023/03/8597.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://mcfarlane.com/wp-content/uploads/2023/03/DC_Multiverse_The_Flash_Website_Banner.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://assets.target.com.au/transform/9c20bc3d-8981-479b-ba2e-7936114ab0fa/64322148-IMG-00?io=transform:extend,width:700,height:800&output=jpeg&quality=80" alt=""/>
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://www.2-clicks-collectiblefigurines.com/wp-content/uploads/2022/01/star-wars-action-figure-history.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://i5.walmartimages.com/asr/288a08b1-027d-46a5-bba1-9830d139122b.57734d893bd96988fa192aee27131e25.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://i.ebayimg.com/images/g/psgAAOSwNjtg-X8F/s-l1600.jpg" alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GalleryFl;