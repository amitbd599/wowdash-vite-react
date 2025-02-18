import React, { useState } from "react";
import Modal from "./child/Modal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "assets/images/gallery/gallery-img1.png",
    "assets/images/gallery/gallery-img2.png",
    "assets/images/gallery/gallery-img3.png",
    "assets/images/gallery/gallery-img4.png",
    "assets/images/gallery/gallery-img5.png",
    "assets/images/gallery/gallery-img6.png",
    "assets/images/gallery/gallery-img7.png",
    "assets/images/gallery/gallery-img8.png",
    "assets/images/gallery/gallery-img9.png",
    "assets/images/gallery/gallery-img10.png",
    "assets/images/gallery/gallery-img11.png",
    "assets/images/gallery/gallery-img12.png",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='card h-100 p-0 radius-12 overflow-hidden gallery-scale'>
      <div className='card-body p-24'>
        <div className='masonry-wrapper'>
          {images.map((image, index) => (
            <div
              key={index}
              className='hover-scale-img border radius-16 overflow-hidden p-8'
            >
              <a
                href={image}
                className='popup-img w-100 h-100 d-flex radius-12 overflow-hidden'
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(image);
                }}
              >
                <img
                  src={image}
                  alt=''
                  className='hover-scale-img__img w-100 h-100 object-fit-cover'
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying the selected image */}
      <Modal isOpen={!!selectedImage} onClose={handleCloseModal}>
        <img
          src={selectedImage}
          alt='Selected'
          style={{ maxWidth: "100%", maxHeight: "80vh" }}
        />
      </Modal>
    </div>
  );
};

export default Gallery;
