import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyBox from '../components/PropertyBox';

const SearchProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchProperties = async () => {
    try {
      const queryParams = searchParams.toString();
      console.log(queryParams);
      const response = await fetch(`http://localhost:3001/properties?${queryParams}`);
      const data = await response.json();

      if (sortOption === 'lowToHigh') {
        data.sort((a, b) => a.price - b.price);
      } else if (sortOption === 'highToLow') {
        data.sort((a, b) => b.price - a.price);
      }

      setProperties(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchProperties();
  }, [searchParams, sortOption]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProperties = properties.slice(firstIndex, lastIndex);

  return (
    <>
      <div class="inside-banner">
        <div class="container">
          <span class="pull-right"><a href="index.php">Home</a> / Buy, Sale & Rent</span>
          <h2>Buy, Sale & Rent</h2>
        </div>
      </div>

      <div class="container">
        <div class="properties-listing spacer">
          <div class="row">
            <div class="col-lg-3 col-sm-4">
              <div class="search-form">
                <form method="get" action="/searchproperty">
                  <h4><span class="glyphicon glyphicon-search"></span> Search for</h4>

                  <input type="text" class="form-control" name="key" placeholder="Search of Properties" />
                  <div class="row">
                    <div class="col-lg-5">
                      <select class="form-control" name="type">
                        <option value="">All Types</option>
                        <option value="rent">Rent</option>
                        <option value="sell">Sell</option>
                      </select>
                    </div>
                    <div class="col-lg-7">
                      <select class="form-control" name="price">
                        <option>Price</option>
                        <option value="15000-20000">$15,000 - $20,000</option>
                        <option value="20000-30000">$200,000 - $250,000</option>
                        <option value="30000-40000">$250,000 - $300,000</option>
                        <option value="40000-1000000">$300,000 - above</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                      <input type="text" class="form-control" name="city" placeholder="Search by city" />
                    </div>
                  </div>
                  <button class="btn btn-primary" type="submit">Find Now</button>
                </form>
              </div>
            </div>

            <div class="col-lg-9 col-sm-8">
              <div class="sortby clearfix">
                <div class="pull-left result">Showing: {currentProperties.length} of {properties.length}</div>
                <div class="pull-right">
                  <select class="form-control" onChange={handleSortChange} value={sortOption}>
                    <option value="">Sort by</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                  </select>
                </div>
              </div>
              <div class="row">
                {currentProperties.map((property) => (
                  <PropertyBox key={property._id} property={property} />
                ))}
              </div>
              <div class="center">
                <ul class="pagination">
                  {Array.from({ length: Math.ceil(properties.length / itemsPerPage) }).map((_, index) => (
                    <li key={index + 1} onClick={() => handlePageChange(index + 1)}>
                      <a href="#">{index + 1}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProperty;
