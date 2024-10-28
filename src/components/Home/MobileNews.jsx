import { useRef, useState } from 'react';
import { Carousel, CarouselContent } from "../ui/carousel";
import { newsItems } from '../../Constants/newsItems'; 
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";
import Modal from 'react-modal'; 

const MobileNews = () => {
  const carouselRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalVideoSrc, setModalVideoSrc] = useState(null); 

  
  const openModal = (videoSrc) => {
    setModalVideoSrc(videoSrc);
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideoSrc(null);
  };

  return (
    <div className="relative px-4 mt-8 mb-4">
      <Helmet>
        <title>What is datta-mandir? | Video Tutorial</title>
        <meta
          name="description"
          content="Watch our insightful video exploring the fundamentals of Buddhism and its beliefs. Discover the essence of Buddhist teachings and practices."
        />
        <meta
          name="keywords"
          content="datta-mandir, video tutorial, Buddhist beliefs, spiritual teachings, mindfulness"
        />
      </Helmet>
      <h2 className="text-xl font-bold text-center mb-4 text-[#9f572a]">Latest Videos</h2>
      
     
      <Carousel className="w-full overflow-hidden mt-8">
        <CarouselContent 
          ref={carouselRef} 
          className="flex carousel-content space-x-4" 
          style={{ overflowX: 'auto', width: '100%' }} 
        >
          {newsItems.map((item) => (
            <motion.div 
              key={item.id}
              className="flex-shrink-0 w-full h-[calc(50vh)] mx-0"
              style={{ width: '100vw' }}
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }} 
              onClick={() => openModal(item.localVideoSrc)} 
            >
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full cursor-pointer">
                <iframe
                  width="100%"
                  height="100%"
                  src={item.localVideoSrc}
                  title="Embedded YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </CarouselContent>
      </Carousel>

      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-white rounded-lg shadow-lg outline-none max-w-3xl w-full h-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        contentLabel="Video Modal"
        ariaHideApp={false} 
      >
        <div className="relative w-full h-[70vh]">
          
          <button 
            className="absolute top-0 right-0 text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10"
            onClick={closeModal}
          >
            ✕
          </button>
          
          {modalVideoSrc && (
            <iframe
              className="w-full h-full"
              src={modalVideoSrc}
              title="Embedded YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default MobileNews;
