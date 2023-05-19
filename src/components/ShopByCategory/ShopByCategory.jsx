import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div>
            <h1 className='text-center font-bold py-10 text-3xl dark:text-white'>Shop By Category</h1>
            <Tabs>
                <TabList>
                    <Tab>Marvel Action Figures</Tab>
                    <Tab>DC Action Figures</Tab>
                    <Tab>Star Wars Action Figures</Tab>
                </TabList>
                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab>Iron Man</Tab>
                            <Tab>Captain America</Tab>
                        </TabList>
                        <TabPanel>
                            <h2>Iron Man Action Figures</h2>
                        
                            <div>
                                <img src="toy1.jpg" alt="Toy 1"/>
                                    <h3>Toy 1</h3>
                                    <p>Price: $X</p>
                                    <p>Rating: X stars</p>
                                    <button>View Details</button>
                            </div>
                    
                            <div>
                                <img src="toy2.jpg" alt="Toy 2"/>
                                    <h3>Toy 2</h3>
                                    <p>Price: $Y</p>
                                    <p>Rating: Y stars</p>
                                    <button>View Details</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Captain America Action Figures</h2>
                         
                            <div>
                                <img src="toy3.jpg" alt="Toy 3"/>
                                    <h3>Toy 3</h3>
                                    <p>Price: $Z</p>
                                    <p>Rating: Z stars</p>
                                    <button>View Details</button>
                            </div>
                           
                            <div>
                                <img src="toy4.jpg" alt="Toy 4"/>
                                    <h3>Toy 4</h3>
                                    <p>Price: $W</p>
                                    <p>Rating: W stars</p>
                                    <button>View Details</button>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab>Super Man</Tab>
                            <Tab>Batman</Tab>
                        </TabList>
                        <TabPanel>
                            <h2>Super Man Action Figures</h2>
                         
                            <div>
                                <img src="toy5.jpg" alt="Toy 5"/>
                                    <h3>Toy 5</h3>
                                    <p>Price: $V</p>
                                    <p>Rating: V stars</p>
                                    <button>View Details</button>
                            </div>
                          
                            <div>
                                <img src="toy6.jpg" alt="Toy 6"/>
                                    <h3>Toy 6</h3>
                                    <p>Price: $U</p>
                                    <p>Rating: U stars</p>
                                    <button>View Details</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Batman Action Figures</h2>
                           
                            <div>
                                <img src="toy7.jpg" alt="Toy 7"/>
                                    <h3>Toy 7</h3>
                                    <p>Price: $T</p>
                                    <p>Rating: T stars</p>
                                    <button>View Details</button>
                            </div>
                       
                            <div>
                                <img src="toy8.jpg" alt="Toy 8"/>
                                    <h3>Toy 8</h3>
                                    <p>Price: $S</p>
                                    <p>Rating: S stars</p>
                                    <button>View Details</button>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab>Boba Fett</Tab>
                            <Tab>Yoda</Tab>
                        </TabList>
                        <TabPanel>
                            <h2>Boba Fett Action Figures</h2>
                         
                            <div>
                                <img src="toy5.jpg" alt="Toy 5"/>
                                    <h3>Toy 5</h3>
                                    <p>Price: $V</p>
                                    <p>Rating: V stars</p>
                                    <button>View Details</button>
                            </div>
                          
                            <div>
                                <img src="toy6.jpg" alt="Toy 6"/>
                                    <h3>Toy 6</h3>
                                    <p>Price: $U</p>
                                    <p>Rating: U stars</p>
                                    <button>View Details</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Yoda Action Figures</h2>
                           
                            <div>
                                <img src="toy7.jpg" alt="Toy 7"/>
                                    <h3>Toy 7</h3>
                                    <p>Price: $T</p>
                                    <p>Rating: T stars</p>
                                    <button>View Details</button>
                            </div>
                       
                            <div>
                                <img src="toy8.jpg" alt="Toy 8"/>
                                    <h3>Toy 8</h3>
                                    <p>Price: $S</p>
                                    <p>Rating: S stars</p>
                                    <button>View Details</button>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;