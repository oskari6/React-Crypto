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
      <h1>What does this site do?</h1>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            style={{ maxWidth: "500px", maxHeight: "750px", height: "auto" }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={prevImage} style={{ marginRight: "10px" }}>
            Previous
          </button>
          <button onClick={nextImage}>Next</button>
        </div>
      </div>
    </div>
  );
}
