import { useState } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

const MobileGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const images = [
    { src: './images/img-1_.jpg', className: 'w-48 h-36' },
    { src: './images/img-4_.jpg', className: 'w-44 h-36' },
    { src: './images/img-7_.jpg', className: 'w-44 h-36' },
    { src: './images/img-8_.jpg', className: 'w-44 h-36' },
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
  };

  return (
    <div className="flex flex-col items-center p-4 mt-8">
       <Helmet>
      <title>Stunning Mobile Gallery | Explore Captivating Images</title>
      <meta name="description" content="Discover our exquisite mobile gallery showcasing a curated collection of stunning images. Browse through various categories, including vibrant landscapes and artistic portraits, all optimized for your viewing pleasure. Dive into a world of visual storytelling today!" />
      </Helmet>
      <h2 className="text-xl font-bold text-center mb-4 text-[#9f572a]">Mobile Gallery</h2>
      <div className="grid grid-cols-2 gap-1 w-full mt-4">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={`Gallery Image ${index + 1}`}
            className={`${image.className} object-cover rounded-md shadow-md cursor-pointer`}
            onClick={() => openModal(image.src)}
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }} 
          />
        ))}
      </div>

      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        <button onClick={closeModal} className="close-button">
          <FaTimes size={24} />
        </button>
        <motion.img
          src={currentImage}
          alt="Large view"
          className="large-image"
          style={{ width: '100%', height: 'auto' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.5 }} 
        />
      </Modal>
    </div>
  );
};

export default MobileGallery;
