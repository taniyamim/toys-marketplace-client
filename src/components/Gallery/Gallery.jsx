import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h1 class="text-center font-bold py-10 text-3xl dark:text-white">Image Gallery With Grid</h1>

            <div class="container lg:px-32 px-4 py-8 mx-auto items-center ">
                <div class="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
                    <div class="w-full row-span-2">
                        <img
                            src="https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"/>
                    </div>
                    <div class="w-full col-span-2 row-span-2">
                        <img
                            src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
                    </div>
                    <div class="w-full ">
                        <img
                            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
                    </div>
                    <div class="w-full">
                        <img
                            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
                    </div>
                    <div class="w-full col-span-2 row-span-2">
                        <img
                            src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
                    </div>

                    <div class="w-full col-span-2">
                        <img
                            src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
                    </div>
                    <div class="w-full">
                        <img
                            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
                    </div>
                    <div class="w-full">
                        <img
                            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;