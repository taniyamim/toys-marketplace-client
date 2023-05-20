import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('Marvel');

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then(res => res.json())
      .then(data => setToys(data));
  }, []);

  const renderToysBySubcategory = () => {
    if (!toys) {
      console.log(toys);
      return null;
    }

    const filteredToys = toys.filter(
      toy => toy.subCategory === selectedSubcategory
    );

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredToys.map(toy => (
          <div key={toy._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={toy.picture} alt={toy.toyName} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{toy.toyName}</h2>
              <p>Price: {toy.price}</p>
              <p>Rating: {toy.rating}</p>
              <p>Subcategory: {toy.subCategory}</p>
              <div className="card-actions">
                <Link to={`/toyDetails/${toy._id}`}>
                  <button className="btn bg-sky-700 text-white">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleTabSelect = (index) => {
    setSelectedSubcategory(['Marvel', 'DC', 'Star wars'][index]);
  };

  return (
    <div className='bg-sky-900 p-8'>
      <h1 className="text-center font-bold py-10 text-3xl dark:text-white">Shop By Category</h1>
      <Tabs onSelect={handleTabSelect}>
        <TabList>
          <Tab>Marvel</Tab>
          <Tab>DC</Tab>
          <Tab>Star Wars</Tab>
        </TabList>
        <TabPanel>
          {renderToysBySubcategory()}
        </TabPanel>
        <TabPanel>
          {renderToysBySubcategory()}
        </TabPanel>
        <TabPanel>
          {renderToysBySubcategory()}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
