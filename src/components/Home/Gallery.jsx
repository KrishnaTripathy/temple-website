import { useState } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';  
import MobileGallery from './MobileGallery';
import { Helmet } from "react-helmet";
const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
  };

  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const hoverEffect = {
    scale: 1.1,
    transition: { duration: 0.3 },
  };

  return (
    <div className="flex flex-col items-center p-4 mt-16">
      <Helmet>
      <title>Stunning Mobile Gallery | Explore Captivating Images</title>
      <meta name="description" content="Discover our exquisite mobile gallery showcasing a curated collection of stunning images. Browse through various categories, including vibrant landscapes and artistic portraits, all optimized for your viewing pleasure. Dive into a world of visual storytelling today!" />
      </Helmet>
      <h2 className="hidden md:flex text-4xl font-bold text-center mb-4 text-[#9f572a]">Gallery</h2>

      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeIn} 
        className="hidden md:flex w-full max-w-4xl mb-4 mr-96 mt-8"
      >
        <motion.div whileHover={hoverEffect} className="flex-1 flex justify-start">
          <img
            src="./images/img-6_.jpg"
            alt="Center Square"
            className="w-96 h-96 object-cover rounded-md shadow-md cursor-pointer"
            onClick={() => openModal('./images/img-6_.jpg')}
          />
        </motion.div>
        <div className="flex-1 flex space-x-4 justify-end">
          <motion.div whileHover={hoverEffect} className="flex-1 flex flex-col items-center">
            <img
              src="./images/img-1_.jpg"
              alt="Square 1"
              className="w-96 h-52 object-cover rounded-md shadow-md cursor-pointer"
              onClick={() => openModal('./images/img-1_.jpg')}
            />
          </motion.div>
          <motion.div whileHover={hoverEffect} className="flex-1 flex flex-col items-center">
            <img
              src="./images/img-9_.jpg"
              alt="Square 2"
              className="w-96 h-52 object-cover rounded-md shadow-md cursor-pointer"
              onClick={() => openModal('./images/img-9_.jpg')}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="hidden md:flex w-full max-w-4xl justify-between mb-4 ml-16"
      >
        <motion.div whileHover={hoverEffect} className="flex-1 flex justify-center">
          <img
            src="./images/img-4_.jpg"
            alt="Small Rectangle"
            className="w-[450px] h-40 object-cover rounded-md shadow-md -mt-44 cursor-pointer"
            onClick={() => openModal('./images/img-4_.jpg')}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="hidden md:flex w-full max-w-4xl justify-end ml-96"
      >
        <motion.div whileHover={hoverEffect} className="flex-none flex justify-end">
          <img
            src="./images/img-2_.jpg"
            alt="Tall Image"
            className="h-96 w-80 object-cover rounded-md shadow-md -mt-[410px] cursor-pointer"
            onClick={() => openModal('./images/img-2_.jpg')}
          />
        </motion.div>
      </motion.div>

     
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
        <img src={currentImage} alt="Large view" className="large-image" style={{ width: '100%', height: 'auto' }} />
      </Modal>

      {/* Show Mobile Gallery only on mobile view */}
      <div className='block md:hidden'>
        <MobileGallery />
      </div>
    </div>
  );
};

export default Gallery;
