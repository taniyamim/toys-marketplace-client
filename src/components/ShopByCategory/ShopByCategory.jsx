import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);

    const renderToysBySubcategory = (toys, subcategoryName) => {
        if (!toys) {
            return null;
        }

        const filteredToys = toys.filter(
            toy => toy.category.subcategory.subcategoryName === subcategoryName
        );

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredToys.map(toy => (
                    <div key={toy.toyId} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={toy.picture} alt={toy.toyName} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{toy.toyName}</h2>
                            <p>Price: {toy.price}</p>
                            <p>Rating: {toy.rating}</p>
                            <p>Subcategory: {toy.category.subcategory.subcategoryName}</p>
                            <div className="card-actions">
                                <Link to={`/toys/${toy.toyId}`}>
                                <button className="btn btn-primary">View Details</button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <h1 className="text-center font-bold py-10 text-3xl dark:text-white">Shop By Category</h1>
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
                            {renderToysBySubcategory(toys, 'Iron Man')}
                        </TabPanel>
                        <TabPanel>
                            <h2>Captain America Action Figures</h2>
                            {renderToysBySubcategory(toys, 'Captain America')}
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
                            {renderToysBySubcategory(toys, 'Superman')}
                        </TabPanel>
                        <TabPanel>
                            <h2>Batman Action Figures</h2>
                            {renderToysBySubcategory(toys, 'Batman')}
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
                            {renderToysBySubcategory(toys, 'Boba Fett')}
                        </TabPanel>
                        <TabPanel>
                            <h2>Yoda Action Figures</h2>
                            {renderToysBySubcategory(toys, 'Yoda')}
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
