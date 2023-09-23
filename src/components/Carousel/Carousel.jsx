import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const images = ['logo11.jpg', 'web.jpg', 'Code.jpg'];
const titles = ['RupaG Web Design', 'Full Stack Developer', 'Responsive Web Design'];
const buttonTexts = ['Get in Touch!', 'Know my Work!', 'Check It Out!'];
const links = ['/contact', '/portfolio', '/portfolio'];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Function to automatically advance the slide
  const autoAdvanceSlide = () => {
    goToNextSlide();
  };

  useEffect(() => {
    // Set an interval to auto-advance the slide every 5 seconds (5000 milliseconds)
    const interval = setInterval(autoAdvanceSlide, 5000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container-fluid" id="carouselcontainer">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false" // Set data-interval to false to prevent manual slide interruption
      >
        <ol className="carousel-indicators">
          {images.map((_, index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={currentIndex === index ? 'active' : ''}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${currentIndex === index ? 'active' : ''}`}>
              <img src={`../Images/${image}`} className="d-block w-100" alt={`Image ${index + 1}`} />
              <div className="carousel-caption">
                <h1 className="display-2">{titles[index]}</h1>
                <Link to={links[index]} className="btn btn-outline-light btn-lg" role="button" id="button1">
                  {buttonTexts[index]}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          onClick={goToPrevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          onClick={goToNextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;




