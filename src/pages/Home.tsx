import "./Home.css";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/1.jpg", "/3.jpg"];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main-content">
      <h1>Our crypto models</h1>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div className="img-container">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            style={{ maxWidth: "500px", maxHeight: "750px", height: "auto" }}
          />
        </div>
      </div>
      <div className="button-container">
        <button onClick={prevImage} className="arrow-button">
          <div className="arrow-left"></div>
        </button>
        <button onClick={nextImage} className="arrow-button">
          <div className="arrow-right"></div>
        </button>
      </div>
    </div>
  );
}
