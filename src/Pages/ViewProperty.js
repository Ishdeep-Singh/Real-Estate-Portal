import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LeadForm from '../components/LeadForm';

const ViewProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:3001/getproperty/${id}`);
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <>
    {/* Your existing code here */}
    <div className="inside-banner">
      <div className="container">
        <span className="pull-right">
          <a href="#">Home</a> / Buy
        </span>
        <h2>{property.title}</h2>
      </div>
    </div>

    <div className="container">
      <div className="properties-listing spacer">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <h2>{property.title}</h2>
            <div className="row">
              <div className="col-lg-8">
                <div className="property-images">
                  {/* Your image carousel code here */}
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators hidden-xs">
                      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                      <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                      <li data-target="#myCarousel" data-slide-to="3" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="item active">
                        <img
                          src={'http://localhost:3001/uploads/'+property.imageUrl}
                          className="properties"
                          alt="properties"
                        />
                      </div>
                    </div>
                    <a
                      className="left carousel-control"
                      href="#myCarousel"
                      data-slide="prev"
                    >
                      <span className="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a
                      className="right carousel-control"
                      href="#myCarousel"
                      data-slide="next"
                    >
                      <span className="glyphicon glyphicon-chevron-right"></span>
                    </a>
                  </div>
                </div>

                <div className="spacer">
                  <h4>
                    <span className="glyphicon glyphicon-th-list"></span> Properties Detail
                  </h4>
                  <p>{property.description}</p>
                  <p>Price: ${property.price}</p>
                  <p>Location: {property.location}, {property.city}, {property.state}</p>
                  <p>Bedrooms: {property.bedrooms}</p>
                  <p>Bathrooms: {property.bathrooms}</p>
                  <p>Hall: {property.hall}</p>
                  <p>Kitchen: {property.kitchen}</p>
                  <p>Square Feet: {property.squareFeet}</p>
                  <p>Amenities: {property.amenities}</p>
                </div>

                <div>
                  <h4>
                    <span className="glyphicon glyphicon-map-marker"></span> Location
                  </h4>
                  <div className="well">
                    <iframe
                      width="100%"
                      height="350"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src={`https://maps.google.com/maps?q=${property.location}, ${property.city}, ${property.state}&output=embed`}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-lg-12 col-sm-6">
                  <div className="property-info">
                    <p className="price">{property.price}</p>
                    <p className="area">
                      <span className="glyphicon glyphicon-map-marker"></span>{' '}
                      {property.location}, {property.city}, {property.state}
                    </p>
                    <div className="profile">
                      <span className="glyphicon glyphicon-user"></span> Agent Details
                      <p>
                        {property.agent.companyName}<br />
                        {property.agent.companyEmail}
                      </p>
                    </div>
                  </div>

                  <h6>
                    <span className="glyphicon glyphicon-home"></span> Availability
                  </h6>
                  <div className="listing-detail">
                    <span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">
                      {property.bedrooms}
                    </span>{' '}
                    <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">
                      {property.hall}
                    </span>{' '}
                    <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">
                      2
                    </span>{' '}
                    <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">
                      {property.kitchen}
                    </span>{' '}
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6 ">
                  <div className="enquiry">
                    <h6>
                      <span className="glyphicon glyphicon-envelope"></span> Post Enquiry
                    </h6>
                 <LeadForm propertyId={property._id}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default ViewProperty;
